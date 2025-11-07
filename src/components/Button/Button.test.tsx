// Modules
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Button from "./Button";

// Render
const renderComponent = (onOpenMock = vi.fn()) =>
	render(<Button onConfirmationModalOpen={onOpenMock} />);

// Suite
describe("Button", () => {
	it("should render the Button component", () => {
		const onOpenMock = vi.fn();
		renderComponent(onOpenMock);

		expect(
			screen.getByRole("button", { name: "clear-all-tickets-button" }),
		).toBeInTheDocument();
	});

	it("should render the 'Delete all Button'", () => {
		const onOpenMock = vi.fn();
		renderComponent(onOpenMock);

		expect(
			screen.getByRole("button", { name: "clear-all-tickets-button" }),
		).toBeInTheDocument();
	});

	it("should call onConfirmationModalOpen when delete button is clicked", async () => {
		const onOpenMock = vi.fn();
		renderComponent(onOpenMock);

		const deleteButton = screen.getByRole("button", {
			name: "clear-all-tickets-button",
		});

		await userEvent.click(deleteButton);

		expect(onOpenMock).toHaveBeenCalledTimes(1);
	});
});
