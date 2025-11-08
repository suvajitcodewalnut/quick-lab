export interface CardPropTypes {
	id: string;
	title: string;
	description: string;
	priority: string;
	assignedTo: string;
	deleteTicket: () => void;
	isTicketResolved: boolean;
}
