// Modules
import { create } from "zustand";
import type { SidebarStoreState } from "./store.types";

export const useSidebarStore = create<SidebarStoreState>((set) => ({
	isOpen: false,
	toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
