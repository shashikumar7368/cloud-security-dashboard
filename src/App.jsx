
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WidgetCard from "./components/WidgetCard";
import AddWidgetModal from "./components/AddWidgetModal";
import CategoryManagerModal from "./components/CategoryManagerModal";

import useDashboardStore from "./store/useDashboardStore";

function App() {
  const categories = useDashboardStore(
    (state) => state.categories
  );

  const [showAddModal, setShowAddModal] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const totalWidgets = categories.reduce(
    (total, category) => total + category.widgets.length,
    0
  );

  const search = searchTerm.toLowerCase().trim();

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.title.toLowerCase().includes(search) ||
        widget.description.toLowerCase().includes(search)
      ),
    }))
    .filter((category) =>
      search ? category.widgets.length > 0 : true
    );

  return (
    <div className="dashboard-shell flex flex-col md:flex-row">

      <Sidebar />

      <main className="dashboard-main">

        <Header
          onAddWidget={() => setShowAddModal(true)}
          onManageWidgets={() => setShowManageModal(true)}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />

        <div className="dashboard-content">

          <div className="dashboard-heading">
            <h2>Dashboard Overview</h2>
            <p>
              Welcome back! Here's what's happening in your
              cloud security environment.
            </p>
          </div>

          <div className="stats-grid">

            <div className="stat-card">
              <p>Total Categories</p>
              <h3>{categories.length}</h3>
            </div>

            <div className="stat-card">
              <p>Total Widgets</p>
              <h3>{totalWidgets}</h3>
            </div>

          </div>

          {filteredCategories.length > 0 ? (

            filteredCategories.map((category) => (

              <section
                key={category.id}
                className="category-section"
              >

                <div className="category-heading">

                  <h2>{category.name}</h2>

                  <span className="category-count">
                    {category.widgets.length} Widgets
                  </span>

                </div>

                {category.widgets.length > 0 ? (

                  <div className="widget-grid">

                    {category.widgets.map((widget) => (

                      <WidgetCard
                        key={widget.id}
                        title={widget.title}
                        description={widget.description}
                        categoryId={category.id}
                        widgetId={widget.id}
                      />

                    ))}

                  </div>

                ) : (

                  <div className="empty-state">
                    No widgets available in this category.
                    Click Add Widget to get started.
                  </div>

                )}

              </section>

            ))

          ) : (

            <div className="empty-state">
              <h3 className="font-bold text-slate-700">
                No widgets found
              </h3>

              <p className="text-sm mt-2">
                Try searching with a different widget name
                or description.
              </p>

              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Clear Search
              </button>
            </div>

          )}

        </div>
      </main>

      {showAddModal && (
        <AddWidgetModal
          onClose={() => setShowAddModal(false)}
        />
      )}

      {showManageModal && (
        <CategoryManagerModal
          onClose={() => setShowManageModal(false)}
        />
      )}

    </div>
  );
}

export default App;
