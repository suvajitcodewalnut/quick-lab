// Modules
import { render, screen } from "@testing-library/react";
import {
	setupDefaultMockups,
	totalCompletedTicketsCountMock,
	totalRemainingTicketsCountMock,
	totalTicketsCountMock,
} from "../../mocks/mock";
import Dashboard from "./Dashboard";

// Render
const renderComponent = () => render(<Dashboard />);

// Suite
describe("Dashboard", () => {
	beforeEach(() => {
		setupDefaultMockups();
	});

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

	it("should display the correct total tickets count", () => {
		totalTicketsCountMock.mockReturnValue(10);
		renderComponent();
		expect(screen.getByText("10")).toBeInTheDocument();
	});

	it("should display the correct completed tickets count", () => {
		totalCompletedTicketsCountMock.mockReturnValue(5);
		renderComponent();
		expect(screen.getByText("5")).toBeInTheDocument();
	});

	it("should display the correct remaining tickets count", () => {
		totalRemainingTicketsCountMock.mockReturnValue(3);
		renderComponent();
		expect(screen.getByText("3")).toBeInTheDocument();
	});

	it("should call totalTicketsCount function from store", () => {
		renderComponent();
		expect(totalTicketsCountMock).toHaveBeenCalled();
	});

	it("should call totalCompletedTicketsCount function from store", () => {
		renderComponent();
		expect(totalCompletedTicketsCountMock).toHaveBeenCalled();
	});

	it("should call totalRemainingTicketsCount function from store", () => {
		renderComponent();
		expect(totalRemainingTicketsCountMock).toHaveBeenCalled();
	});

	it("should display correct counts with multiple tickets scenario", () => {
		totalTicketsCountMock.mockReturnValue(20);
		totalCompletedTicketsCountMock.mockReturnValue(15);
		totalRemainingTicketsCountMock.mockReturnValue(5);

		renderComponent();

		expect(screen.getByText("20")).toBeInTheDocument();
		expect(screen.getByText("15")).toBeInTheDocument();
		expect(screen.getByText("5")).toBeInTheDocument();
	});

	it("should display zero when there are no tickets", () => {
		totalTicketsCountMock.mockReturnValue(0);
		totalCompletedTicketsCountMock.mockReturnValue(0);
		totalRemainingTicketsCountMock.mockReturnValue(0);

		renderComponent();

		const zeroElements = screen.getAllByText("0");
		expect(zeroElements).toHaveLength(3);
	});
});
