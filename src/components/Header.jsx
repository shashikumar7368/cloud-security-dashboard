
import {
  Search,
  Bell,
  Plus,
  Settings2,
  ChevronRight,
} from "lucide-react";

function Header({
  onAddWidget,
  onManageWidgets,
  searchTerm,
  onSearch,
}) {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-7 py-4 sticky top-0 z-30">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            Workspace
            <ChevronRight size={13} />
            <span className="text-blue-600 font-semibold">Dashboard</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            CNAPP Dashboard
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Monitor your cloud security environment
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">

          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl flex-1 min-w-0 sm:flex-none sm:w-56 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
            <Search size={18} className="text-slate-400 shrink-0" />

            <input
              type="search"
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search widgets..."
              aria-label="Search widgets"
              className="bg-transparent outline-none text-sm w-full min-w-0 text-slate-700 placeholder:text-slate-400"
            />
          </div>

          <button
            type="button"
            aria-label="Notifications"
            className="p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 transition"
          >
            <Bell size={19} />
          </button>

          <button
            type="button"
            onClick={onManageWidgets}
            className="flex items-center gap-2 border border-slate-200 text-slate-700 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-sm font-medium transition"
          >
            <Settings2 size={17} />
            <span className="hidden sm:inline">Manage</span>
          </button>

          <button
            type="button"
            onClick={onAddWidget}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 text-sm font-semibold transition hover:-translate-y-0.5"
          >
            <Plus size={18} />
            Add Widget
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;
