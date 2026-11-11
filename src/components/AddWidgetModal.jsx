
import { useState } from "react";
import { X } from "lucide-react";
import useDashboardStore from "../store/useDashboardStore";

function AddWidgetModal({ onClose }) {
  const categories = useDashboardStore(
    (state) => state.categories
  );

  const addWidget = useDashboardStore(
    (state) => state.addWidget
  );

  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [categoryId, setCategoryId] = useState(
    categories[0]?.id?.toString() || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!widgetName.trim() || !widgetText.trim() || !categoryId) {
      return;
    }

    const newWidget = {
      id: Date.now(),
      title: widgetName.trim(),
      description: widgetText.trim(),
    };

    addWidget(Number(categoryId), newWidget);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl">

        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold text-gray-800">
            Add New Widget
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
            type="button"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">

          <div>
            <label className="block text-sm font-medium mb-2">
              Widget Name
            </label>

            <input
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              placeholder="Enter widget name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Widget Text
            </label>

            <textarea
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              placeholder="Enter widget description"
              rows="4"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Select Category
            </label>

            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Widget
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default AddWidgetModal;
