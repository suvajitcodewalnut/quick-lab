// Modules
import { vi } from "vitest";

// Mock functions
export const toggleSidebarMock = vi.fn();
export const useSidebarMock = vi.fn();
export const useScreenSizeMock = vi.fn();

// Mock the modules
vi.mock("../store/useSidebar", () => ({
	useSidebar: () => useSidebarMock(),
}));

vi.mock("../hooks/useScreenSize", () => ({
	useScreenSize: () => useScreenSizeMock(),
}));

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
