
import { X, Settings2 } from "lucide-react";
import useDashboardStore from "../store/useDashboardStore";

function CategoryManagerModal({ onClose }) {
  const categories = useDashboardStore(
    (state) => state.categories
  );

  const removeWidget = useDashboardStore(
    (state) => state.removeWidget
  );

  const handleToggle = (categoryId, widgetId, checked) => {
    if (!checked) {
      removeWidget(categoryId, widgetId);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-5">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-xl shadow-xl flex flex-col">

        <div className="flex justify-between items-center p-5 border-b">
          <div className="flex items-center gap-2">
            <Settings2 className="text-blue-600" />
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Manage Categories
              </h2>
              <p className="text-xs text-gray-500">
                Select which widgets should appear on your dashboard.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close category manager"
            className="text-gray-500 hover:text-red-600"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-6">
          {categories.map((category) => (
            <section key={category.id}>
              <h3 className="font-semibold text-gray-800 mb-3">
                {category.name}
              </h3>

              <div className="space-y-3">
                {category.widgets.length > 0 ? (
                  category.widgets.map((widget) => (
                    <label
                      key={widget.id}
                      className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={true}
                        onChange={(e) =>
                          handleToggle(
                            category.id,
                            widget.id,
                            e.target.checked
                          )
                        }
                        className="mt-1 accent-blue-600"
                      />

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-800">
                          {widget.title}
                        </p>

                        <p className="text-xs text-gray-500 mt-1 break-words">
                          {widget.description}
                        </p>
                      </div>
                    </label>
                  ))
                ) : (
                  <p className="text-sm text-gray-400">
                    No widgets in this category.
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="p-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}

export default CategoryManagerModal;
