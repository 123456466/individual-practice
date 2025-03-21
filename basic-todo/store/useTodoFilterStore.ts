import { create } from "zustand";
import { combine } from "zustand/middleware";

export type FilterType = "all" | "completed";

interface TodoFilterState {
  filter: FilterType;
}

const initalState: TodoFilterState = {
  filter: "all",
};

export const useTodoFilterStore = create(
  combine(initalState, (set) => ({
    setFilter: (filter: FilterType) => set({ filter }),
  }))
);
