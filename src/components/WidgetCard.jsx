
import {
  PieChart,
  X,
  MoreHorizontal,
  Activity,
} from "lucide-react";

import useDashboardStore from "../store/useDashboardStore";

function WidgetCard({ title, description, categoryId, widgetId }) {
  const removeWidget = useDashboardStore(
    (state) => state.removeWidget
  );

  const handleRemove = () => {
    const confirmed = window.confirm(
      `Are you sure you want to remove "${title}"?`
    );

    if (confirmed) {
      removeWidget(categoryId, widgetId);
    }
  };

  return (
    <article className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-blue-200 transition-all duration-300 min-w-0 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition" />

      <div className="flex items-start justify-between gap-3 mb-5">

        <div className="flex items-start gap-3 min-w-0">

          <div className="bg-blue-50 text-blue-600 p-3 rounded-xl shrink-0">
            <PieChart size={21} />
          </div>

          <div className="min-w-0">
            <h3 className="font-bold text-slate-800 text-sm sm:text-base break-words leading-6">
              {title}
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              Dashboard Widget
            </p>
          </div>

        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            aria-label="Widget options"
            title="Widget options"
            className="p-1.5 text-slate-300 hover:text-slate-600 rounded-lg"
          >
            <MoreHorizontal size={19} />
          </button>

          <button
            onClick={handleRemove}
            type="button"
            title="Remove widget"
            aria-label={`Remove ${title}`}
            className="p-1.5 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <X size={18} />
          </button>
        </div>

      </div>

      <div className="border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <Activity size={15} className="text-emerald-500" />
          <span className="text-xs font-semibold text-emerald-600">
            Widget Active
          </span>
        </div>

        <p className="text-sm text-slate-500 leading-6 break-words">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-5 pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          Cloud Security
        </span>

        <span className="text-xs font-semibold text-blue-600">
          View Details →
        </span>
      </div>

    </article>
  );
}

export default WidgetCard;
