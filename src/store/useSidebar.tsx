// Modules
import { create } from "zustand";
import type { SidebarStoreState } from "./types";

export const useSidebar = create<SidebarStoreState>((set) => ({
	isOpen: false,
	toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
