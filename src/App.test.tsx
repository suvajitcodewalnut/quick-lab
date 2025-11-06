// Modules
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Render
const renderComponent = () => ({
	user: userEvent.setup(),
	...render(<App />),
});
// Mock
vi.mock("./components/Navigation/Navigation.tsx", () => ({
	default: () => (
		<div>
			<p>QUICKLAB</p>
			<button type="button">Add ticket</button>
			<button type="button">Menu</button>
		</div>
	),
}));

// Suite
describe("App component", () => {
	it("should render the component correctly", () => {
		renderComponent();
	});

	it("should properly render the navigation component with header correctly", () => {
		renderComponent();
		expect(screen.getByText("QUICKLAB")).toBeInTheDocument();
	});

	it("should properly render the 'Add ticket' button correctly", () => {
		renderComponent();
		expect(
			screen.getByRole("button", { name: "Add ticket" }),
		).toBeInTheDocument();
	});

	it("should properly render the 'Menu' button correctly", () => {
		renderComponent();
		expect(screen.getByRole("button", { name: "Menu" })).toBeInTheDocument();
	});
});
