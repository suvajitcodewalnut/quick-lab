// Modules
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

// Render
const renderComponent = () => render(<Dashboard />);

// Suite
describe("Dashboard", () => {
	it("should render the title of the component correctly", () => {
		renderComponent();
		expect(screen.getByText("DASHBOARD")).toBeInTheDocument();
	});

	it("should render the 'completed' tab in the component correctly", () => {
		renderComponent();
		expect(screen.getByText("COMPLETED")).toBeInTheDocument();
	});

	it("should render the 'remaining' tab in the component correctly", () => {
		renderComponent();
		expect(screen.getByText("REMAINING")).toBeInTheDocument();
	});

	it("should render the 'total' tab in the component correctly", () => {
		renderComponent();
		expect(screen.getByText("TOTAL")).toBeInTheDocument();
	});
});
