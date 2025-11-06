// Modules

import { render, screen } from "@testing-library/react";
import App from "./App";

const renderComponent = () => render(<App />);

describe("App component", () => {
	it("should render the component correctly", () => {
		renderComponent();
	});
	it("should render the header text", () => {
		renderComponent();
		expect(screen.getByText("QUICKLAB")).toBeInTheDocument();
	});
});
