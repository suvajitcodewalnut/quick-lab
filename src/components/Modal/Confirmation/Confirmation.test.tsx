// Modules
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Confirmation from "./Confirmation";

// Render
const renderComponent = (onClose = vi.fn()) =>
	render(<Confirmation onConfirmationModalClose={onClose} />);

// Suite
describe("Confirmation", () => {
	it("should render the component correctly", () => {
		renderComponent();
	});

	it("should render the 'close confirmation modal' button", () => {
		renderComponent();
		expect(
			screen.getByRole("button", { name: "confirmation-modal-close-button" }),
		).toBeInTheDocument();
	});

	it("should render the 'check confirmation modal' button", () => {
		renderComponent();
		expect(
			screen.getByRole("button", { name: "confirmation-modal-check-button" }),
		).toBeInTheDocument();
	});

	it("should properly close the confirmation modal when the 'close modal' button is clicked", async () => {
		const onModalClose = vi.fn();
		renderComponent(onModalClose);

		await userEvent.click(
			screen.getByRole("button", { name: "confirmation-modal-close-button" }),
		);
		expect(onModalClose).toBeCalledTimes(1);
	});
});
