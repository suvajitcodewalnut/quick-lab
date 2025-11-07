// Modules
import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useScreenSize } from "../useScreenSize";

// Unmock the hook for this test file to test the actual implementation
vi.unmock("../useScreenSize");

// Suite
describe("useScreenSize", () => {
	it("should update the size when window is resized", () => {
		window.innerWidth = 1000;
		window.innerHeight = 800;

		const { result } = renderHook(() => useScreenSize());

		expect(result.current.width).toBe(1000);
		expect(result.current.height).toBe(800);

		act(() => {
			window.innerWidth = 640;
			window.innerHeight = 480;
			window.dispatchEvent(new Event("resize"));
		});

		expect(result.current.width).toBe(640);
		expect(result.current.height).toBe(480);
	});
});
