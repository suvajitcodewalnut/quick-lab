// Modules
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Sidebar from "./Sidebar";

// Render
const renderComponent = () => {
	render(<Sidebar />);
};
// Mock
vi.mock("../Dashboard/Dashboard.test.tsx", () => ({
	default: () => <div>DASHBOARD</div>,
}));

// Suite
describe("Sidebar Component", () => {
	it("should render the sidebar with 'Dashboard' component", () => {
		renderComponent();
		expect(screen.getByText("DASHBOARD")).toBeInTheDocument();
	});
});
