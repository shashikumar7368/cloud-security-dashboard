
import { create } from "zustand";
import { persist } from "zustand/middleware";
import dashboardData from "../data/dashboardData";

const useDashboardStore = create(
  persist(
    (set) => ({
      categories: dashboardData.categories,

      // Add a new widget
      addWidget: (categoryId, widget) =>
        set((state) => ({
          categories: state.categories.map((category) =>
            category.id === categoryId
              ? {
                  ...category,
                  widgets: [...category.widgets, widget],
                }
              : category
          ),
        })),

      // Remove a widget
      removeWidget: (categoryId, widgetId) =>
        set((state) => ({
          categories: state.categories.map((category) =>
            category.id === categoryId
              ? {
                  ...category,
                  widgets: category.widgets.filter(
                    (widget) => widget.id !== widgetId
                  ),
                }
              : category
          ),
        })),
    }),
    {
      name: "dashboard-storage",
    }
  )
);

export default useDashboardStore;
