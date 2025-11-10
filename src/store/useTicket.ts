// Modules
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Ticket, TicketStoreState } from "./store.types";

export const useTicketStore = create<TicketStoreState>()(
	persist(
		(set, get) => ({
			tickets: [],
			// Add new ticket to the store
			addTicket: (title, description, priority, assignedTo, completed) => {
				const newTicket: Ticket = {
					id: crypto.randomUUID(),
					title,
					description,
					priority,
					assignedTo,
					completed,
				};
				set((state) => ({ tickets: [...state.tickets, newTicket] }));
			},
			// Deleting a particular ticket from the store
			deleteTicket: (id) => {
				set((state) => ({
					tickets: state.tickets.filter((ticket) => ticket.id !== id),
				}));
			},
			// Toggling the state of completion of the ticket from the store
			toggleTicketCompletion: (id) => {
				set((state) => ({
					tickets: state.tickets.map((ticket) =>
						ticket.id === id
							? { ...ticket, completed: !ticket.completed }
							: ticket,
					),
				}));
			},
			// Delete all the tickets from the store
			clearAllExistingTickets: () => set({ tickets: [] }),
			// Total tickets count
			totalTicketsCount: () => get().tickets.length,
			// Total tickets which are completed
			totalCompletedTicketsCount: () =>
				get().tickets.filter((ticket) => ticket.completed).length,
			// Total remaining tickets count
			totalRemainingTicketsCount: () =>
				get().tickets.filter((ticket) => !ticket.completed).length,
		}),
		{
			name: "quick-lab-store",
			partialize: (state) => ({ tickets: state.tickets }),
		},
	),
);
