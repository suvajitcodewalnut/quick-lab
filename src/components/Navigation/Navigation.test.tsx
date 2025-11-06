// Modules
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type Mock, vi } from "vitest";
import Navigation from "./Navigation";

// Helper
const renderComponent = () => ({
	user: userEvent.setup(),
	...render(<Navigation />),
});

// Mock
vi.mock("../../store/useSidebar", () => ({
	useSidebar: vi.fn(),
}));

vi.mock("../../hooks/useScreenSize", () => ({
	__esModule: true,
	default: vi.fn(),
}));

// Suite
describe("Navigation component", () => {
	const toggleSidebarMock = vi.fn();

	beforeEach(async () => {
		vi.resetAllMocks();

		// Default Zustand mock
		const { useSidebar } = await import("../../store/useSidebar");
		(useSidebar as unknown as Mock).mockReturnValue({
			isOpen: false,
			toggleSidebar: toggleSidebarMock,
		});

		// Default screen size mock
		const useScreenSize = (await import("../../hooks/useScreenSize"))
			.default as Mock;
		useScreenSize.mockReturnValue({ width: 1024, height: 768 });
	});

	it("should render QUICKLAB title and buttons", () => {
		renderComponent();

		expect(screen.getByText("QUICKLAB")).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /add ticket/i }),
		).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
	});

	it("should call toggleSidebar when the menu button is clicked", async () => {
		const { user } = renderComponent();

		const menuButton = screen.getByRole("button", { name: /menu/i });
		await user.click(menuButton);

		expect(toggleSidebarMock).toHaveBeenCalledTimes(1);
	});

	it("should show the right icon depending on isOpen state", async () => {
		const { useSidebar } = await import("../../store/useSidebar");

		(useSidebar as unknown as Mock).mockReturnValue({
			isOpen: false,
			toggleSidebar: toggleSidebarMock,
		});
		renderComponent();
		expect(screen.getByTestId("menu-icon")).toBeInTheDocument();

		(useSidebar as unknown as Mock).mockReturnValue({
			isOpen: true,
			toggleSidebar: toggleSidebarMock,
		});
		renderComponent();
		expect(screen.getByTestId("close-icon")).toBeInTheDocument();
	});

	it("should hide button labels when width ≤ 500", async () => {
		const useScreenSize = (await import("../../hooks/useScreenSize"))
			.default as Mock;
		useScreenSize.mockReturnValue({ width: 400, height: 800 });

		renderComponent();

		expect(screen.queryByText(/add ticket/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/menu/i)).not.toBeInTheDocument();
	});
});
