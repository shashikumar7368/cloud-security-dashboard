
import {
  LayoutDashboard,
  Shield,
  Settings,
  FileText,
  HelpCircle,
  Cloud,
} from "lucide-react";

function Sidebar() {
  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Security", icon: Shield },
    { label: "Reports", icon: FileText },
  ];

  return (
    <aside className="w-full md:w-64 md:min-h-screen bg-[#111b35] text-white p-5 flex flex-col shrink-0">

      <div className="flex items-center gap-3 mb-7 md:mb-12">
        <div className="bg-blue-500 p-2 rounded-xl">
          <Cloud size={23} />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-wide">
            CloudGuard
          </h1>
          <p className="text-xs text-slate-400">
            Security Platform
          </p>
        </div>
      </div>

      <p className="hidden md:block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
        Workspace
      </p>

      <nav className="flex md:flex-col gap-2 overflow-x-auto">
        {navItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl whitespace-nowrap text-sm transition-all ${
              active
                ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Icon size={19} />
            {label}
          </button>
        ))}
      </nav>

      <div className="hidden md:block mt-auto space-y-2 pt-8">

        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
          Preferences
        </p>

        <button className="flex items-center gap-3 px-3 py-3 text-sm text-slate-400 hover:text-white w-full rounded-xl hover:bg-slate-800">
          <Settings size={19} />
          Settings
        </button>

        <button className="flex items-center gap-3 px-3 py-3 text-sm text-slate-400 hover:text-white w-full rounded-xl hover:bg-slate-800">
          <HelpCircle size={19} />
          Help & Support
        </button>

        <div className="border-t border-slate-700 mt-5 pt-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
            AU
          </div>

          <div>
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;
