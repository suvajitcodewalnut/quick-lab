export interface SidebarStoreState {
	isOpen: boolean;
	toggleSidebar: () => void;
}

export interface Ticket {
	id: string;
	title: string;
	description: string;
	priority: string;
	assignedTo: string;
	completed: boolean;
}

export interface TicketStoreState {
	tickets: Ticket[];

	addTicket: (
		title: string,
		description: string,
		priority: string,
		assignedTo: string,
		completed: boolean,
	) => void;
	deleteTicket: (id: string) => void;
	toggleTicketCompletion: (id: string) => void;
	clearAllExistingTickets: () => void;

	totalTicketsCount: () => void;
	totalCompletedTicketsCount: () => void;
	totalRemainingTicketsCount: () => void;
}
