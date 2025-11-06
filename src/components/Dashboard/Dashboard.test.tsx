// Modules
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

// Render
const renderComponent = () => {
	render(<Dashboard />);
};

// Suite
describe("Dashboard Component", () => {
	it("should render the title of the component correctly", () => {
		renderComponent();
		expect(screen.getByText("DASHBOARD")).toBeInTheDocument();
	});
});
