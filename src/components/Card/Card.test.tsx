// Modules
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import type { CardPropTypes } from "./Card.types";

const renderComponent = (
	id: string,
	title: string,
	description: string,
	priority: string,
	assignedTo: string,
	isTicketResolved: boolean,
	additional?: Partial<CardPropTypes>,
) =>
	render(
		<Card
			id={id}
			title={title}
			description={description}
			priority={priority}
			assignedTo={assignedTo}
			isTicketResolved={isTicketResolved}
			onDeleteTicket={vi.fn()}
			{...additional}
		/>,
	);

describe("Card", () => {
	it("should render the Card component properly", () => {
		renderComponent(
			"1",
			"Login fix",
			"Users are unable to login",
			"High",
			"suvajit@codewalnut.com",
			false,
		);
	});

	it('should render the "delete" button', () => {
		renderComponent(
			"2",
			"Login fix",
			"Users are unable to login",
			"High",
			"suvajit@codewalnut.com",
			false,
		);
		expect(
			screen.getByRole("button", { name: "button-delete" }),
		).toBeInTheDocument();
	});

	it('should render the "mark as complete" button', () => {
		renderComponent(
			"3",
			"Login fix",
			"Users are unable to login",
			"High",
			"suvajit@codewalnut.com",
			true,
		);
		expect(
			screen.getByRole("button", { name: "button-mark-as-complete" }),
		).toBeInTheDocument();
	});
});
