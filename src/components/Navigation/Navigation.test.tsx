// Modules
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
	setupDefaultMockups,
	toggleSidebarMock,
	useScreenSizeMock,
	useSidebarMock,
} from "../../mocks/mock";
import Navigation from "./Navigation";

// Render
const renderComponent = () => render(<Navigation />);

// Suite
describe("Navigation", () => {
	beforeEach(() => {
		setupDefaultMockups();
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
		renderComponent();

		const menuButton = screen.getByRole("button", { name: /menu/i });
		await userEvent.click(menuButton);

		expect(toggleSidebarMock).toHaveBeenCalledTimes(1);
	});

	it("should show menu-icon when isOpen is false", () => {
		useSidebarMock.mockReturnValue({
			isOpen: false,
			toggleSidebar: toggleSidebarMock,
		});

		renderComponent();

		expect(
			screen.getByRole("button", { name: /menu-icon/i }),
		).toBeInTheDocument();
	});

	it("should show menu-close-icon when isOpen is true", () => {
		useSidebarMock.mockReturnValue({
			isOpen: true,
			toggleSidebar: toggleSidebarMock,
		});

		renderComponent();

		expect(
			screen.getByRole("button", { name: /menu-close-icon/i }),
		).toBeInTheDocument();
	});

	it("should hide button labels when width ≤ 500", () => {
		useScreenSizeMock.mockReturnValue({ width: 400, height: 800 });

		renderComponent();

		// When width <= 500, the text should be empty string
		const buttons = screen.getAllByRole("button");
		const addTicketButton = buttons[0];
		const menuButton = buttons[1];

		// The buttons should exist but without text labels (only icons)
		expect(addTicketButton).toBeInTheDocument();
		expect(menuButton).toBeInTheDocument();

		// The text content should only be empty string (icons don't have text content)
		expect(addTicketButton.textContent?.trim()).toBe("");
		expect(menuButton.textContent?.trim()).toBe("");
	});
});
