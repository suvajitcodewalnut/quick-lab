// Modules
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toastSuccessMock } from "../../../mocks/mock";
import Form from "./Form";

// Render
const renderComponent = () => render(<Form />);

// Suite
describe("Form", () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	it("renders the form fields and submit button", () => {
		renderComponent();

		// Check fields
		expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Assigned To/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();

		// Check submit button
		expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
	});

	it("shows validation errors when submitting empty form", async () => {
		renderComponent();
		await userEvent.click(screen.getByRole("button", { name: /Submit/i }));

		await waitFor(() => {
			expect(
				screen.getByText(/Title must be at least 3 characters long!/i),
			).toBeInTheDocument();
			expect(
				screen.getByText(/Description must be at least 10 characters!/i),
			).toBeInTheDocument();
			expect(
				screen.getByText(/Please provide a valid email address!/i),
			).toBeInTheDocument();
			expect(
				screen.getByText(/Priority must be either HIGH, MEDIUM or LOW/i),
			).toBeInTheDocument();
		});

		expect(toastSuccessMock).not.toHaveBeenCalled();
	});

	it("submits successfully when valid data is entered", async () => {
		renderComponent();
		// Fill valid form data — use values that satisfy your zod schema
		await userEvent.type(screen.getByLabelText(/Title/i), "My Ticket");
		await userEvent.type(
			screen.getByLabelText(/Description/i),
			"A detailed description for testing.",
		);
		await userEvent.type(
			screen.getByLabelText(/Assigned To/i),
			"user@example.com",
		);
		await userEvent.type(screen.getByLabelText(/Priority/i), "HIGH");

		await userEvent.click(screen.getByRole("button", { name: /Submit/i }));

		// Wait for the toast call
		await waitFor(() => {
			expect(toastSuccessMock).toHaveBeenCalledWith(
				"TICKET CREATED SUCCESSFULLY!",
			);
		});

		// Optionally check that no validation errors remain
		expect(screen.queryByText(/must be at least/i)).not.toBeInTheDocument();
	});

	it("shows error message for title that is too long", async () => {
		renderComponent();

		await userEvent.type(
			screen.getByLabelText(/Title/i),
			"This title is way too long",
		);
		await userEvent.type(
			screen.getByLabelText(/Description/i),
			"Valid description with enough characters",
		);
		await userEvent.type(
			screen.getByLabelText(/Assigned To/i),
			"user@example.com",
		);
		await userEvent.type(screen.getByLabelText(/Priority/i), "LOW");

		await userEvent.click(screen.getByRole("button", { name: /Submit/i }));

		await waitFor(() => {
			expect(screen.getByText(/Title too long!/i)).toBeInTheDocument();
		});

		expect(toastSuccessMock).not.toHaveBeenCalled();
	});
});
