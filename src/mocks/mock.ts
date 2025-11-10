// Modules
import { vi } from "vitest";

// Mock functions
export const toggleSidebarMock = vi.fn();
export const useSidebarStoreMock = vi.fn();
export const useScreenSizeMock = vi.fn();
export const toastSuccessMock = vi.fn();
export const useTicketStoreMock = vi.fn();
export const totalTicketsCountMock = vi.fn();
export const totalCompletedTicketsCountMock = vi.fn();
export const totalRemainingTicketsCountMock = vi.fn();
export const addTicketMock = vi.fn();
export const deleteTicketMock = vi.fn();
export const toggleTicketCompletionMock = vi.fn();
export const clearAllExistingTicketsMock = vi.fn();

// Mock the modules
vi.mock("../store/useSidebar", () => ({
	useSidebarStore: () => useSidebarStoreMock(),
}));

vi.mock("../store/useTicket", () => ({
	useTicketStore: () => useTicketStoreMock(),
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
	useSidebarStoreMock.mockReturnValue({
		isOpen: false,
		toggleSidebar: toggleSidebarMock,
	});

	// Setup useScreenSize default return value
	useScreenSizeMock.mockReturnValue({
		width: 1024,
		height: 768,
	});

	// Setup useTicketStore default return value
	totalTicketsCountMock.mockReturnValue(0);
	totalCompletedTicketsCountMock.mockReturnValue(0);
	totalRemainingTicketsCountMock.mockReturnValue(0);

	useTicketStoreMock.mockReturnValue({
		tickets: [],
		addTicket: addTicketMock,
		deleteTicket: deleteTicketMock,
		toggleTicketCompletion: toggleTicketCompletionMock,
		clearAllExistingTickets: clearAllExistingTicketsMock,
		totalTicketsCount: totalTicketsCountMock,
		totalCompletedTicketsCount: totalCompletedTicketsCountMock,
		totalRemainingTicketsCount: totalRemainingTicketsCountMock,
	});
}
