// Modules
import { vi } from "vitest";

// Mock functions
export const toggleSidebarMock = vi.fn();
export const useSidebarMock = vi.fn();
export const useScreenSizeMock = vi.fn();
export const toastSuccessMock = vi.fn();

// Mock the modules
vi.mock("../store/useSidebar", () => ({
	useSidebar: () => useSidebarMock(),
}));

vi.mock("../hooks/useScreenSize", () => ({
	useScreenSize: () => useScreenSizeMock(),
}));

// Mock react-hot-toast
vi.mock("react-hot-toast", async (importOriginal) => {
	const actual = await importOriginal<typeof import("react-hot-toast")>();
	return {
		...actual,
		default: {
			...actual.default,
			success: toastSuccessMock,
		},
	};
});

// Setup default mock return values
export function setupDefaultMockups() {
	// Reset all mocks
	vi.clearAllMocks();

	// Setup useSidebar default return value
	useSidebarMock.mockReturnValue({
		isOpen: false,
		toggleSidebar: toggleSidebarMock,
	});

	// Setup useScreenSize default return value
	useScreenSizeMock.mockReturnValue({
		width: 1024,
		height: 768,
	});
}
