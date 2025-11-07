export interface CardPropTypes {
	title: string;
	description: string;
	priority: string;
	assignedTo: string;
	markComplete: () => void;
	deleteTicket: () => void;
}
