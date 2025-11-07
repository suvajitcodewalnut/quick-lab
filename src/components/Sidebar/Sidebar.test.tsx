// Modules
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import {
	setupDefaultMockups,
	toggleSidebarMock,
	useSidebarMock,
} from "../../mocks/mock";
import Sidebar from "./Sidebar";

// Mock Dashboard component
vi.mock("../Dashboard/Dashboard", () => ({
	default: () => <div>DASHBOARD</div>,
}));

// Render
const renderComponent = () => render(<Sidebar />);

// Suite
describe("Sidebar", () => {
	beforeEach(() => {
		setupDefaultMockups();
	});

	it("should render the sidebar with 'Dashboard' component", () => {
		useSidebarMock.mockReturnValue({
			isOpen: true,
			toggleSidebar: toggleSidebarMock,
		});

		renderComponent();
		expect(screen.getByText("DASHBOARD")).toBeInTheDocument();
	});
});
