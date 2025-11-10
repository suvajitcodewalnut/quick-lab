// Modules
import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useSidebarStore } from "../useSidebar";

// Unmock the useSidebarStore to test the actual implementation
vi.unmock("../useSidebar.ts");

// Suite
describe("useSidebarStore", () => {
	it("should have initial state of the sidebar", () => {
		const { result } = renderHook(() => useSidebarStore());
		expect(result.current.isOpen).toBe(false);
	});

	it("should toggle the sidebar panel state", () => {
		const { result } = renderHook(() => useSidebarStore());
		act(() => {
			result.current.toggleSidebar();
		});
		expect(result.current.isOpen).toBe(true);
	});

	it("should re-toggle the sidebar panel state", () => {
		const { result } = renderHook(() => useSidebarStore());
		act(() => {
			result.current.toggleSidebar();
			result.current.toggleSidebar();
		});
		expect(result.current.isOpen).toBe(true);
	});
});
