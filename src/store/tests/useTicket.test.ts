// Modules
import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { useTicketStore } from "../useTicket";

// Unmock the useTicketStore to test the actual implementation
vi.unmock("../useTicket");

// Suite
describe("useTicketStore", () => {
	beforeEach(() => {
		// Clear localStorage to reset persisted state
		localStorage.clear();
	});

	it("should have the initial state with empty tickets", () => {
		const { result } = renderHook(() => useTicketStore());
		// Clear any existing tickets from previous tests
		act(() => {
			result.current.clearAllExistingTickets();
		});
		expect(result.current.tickets).toEqual([]);
		expect(result.current.totalTicketsCount()).toBe(0);
	});

	it("should add a ticket to the tickets store", () => {
		const { result } = renderHook(() => useTicketStore());
		// Clear any existing tickets from previous tests
		act(() => {
			result.current.clearAllExistingTickets();
		});
		act(() => {
			result.current.addTicket(
				"Login Bug fix",
				"Need to fix the login issue for admin panel",
				"HIGH",
				"suvajit@codewalnut.com",
				false,
			);
		});
		expect(result.current.tickets).toHaveLength(1);
		expect(result.current.tickets[0].title).toBe("Login Bug fix");
		expect(result.current.tickets[0].description).toBe(
			"Need to fix the login issue for admin panel",
		);
		expect(result.current.tickets[0].completed).toBe(false);
		expect(result.current.tickets[0].assignedTo).toBe("suvajit@codewalnut.com");
		expect(result.current.totalTicketsCount()).toBe(1);
	});

	it("should delete a ticket from the tickets store", () => {
		const { result } = renderHook(() => useTicketStore());
		// Clear any existing tickets from previous tests
		act(() => {
			result.current.clearAllExistingTickets();
		});
		act(() => {
			result.current.addTicket(
				"Login Bug fix",
				"Need to fix the login issue for admin panel",
				"HIGH",
				"suvajit@codewalnut.com",
				false,
			);
		});
		const ticketId = result.current.tickets[0].id;
		act(() => {
			result.current.deleteTicket(ticketId);
		});
		expect(result.current.tickets).toHaveLength(0);
		expect(result.current.totalTicketsCount()).toBe(0);
	});

	it("should toggle the ticket complete from the tickets store", () => {
		const { result } = renderHook(() => useTicketStore());
		act(() => {
			result.current.clearAllExistingTickets();
		});
		act(() => {
			result.current.addTicket(
				"Login Bug fix",
				"Need to fix the login issue for admin panel",
				"HIGH",
				"suvajit@codewalnut.com",
				false,
			);
		});
		const ticketId = result.current.tickets[0].id;
		expect(result.current.tickets[0].completed).toBe(false);
		expect(result.current.totalCompletedTicketsCount()).toBe(0);
		act(() => {
			result.current.toggleTicketCompletion(ticketId);
		});
		expect(result.current.tickets[0].completed).toBe(true);
		expect(result.current.totalCompletedTicketsCount()).toBe(1);
	});

	it("should toggle the ticket incomplete from the tickets store", () => {
		const { result } = renderHook(() => useTicketStore());
		act(() => {
			result.current.clearAllExistingTickets();
		});
		act(() => {
			result.current.addTicket(
				"Login Bug fix",
				"Need to fix the login issue for admin panel",
				"HIGH",
				"suvajit@codewalnut.com",
				true,
			);
		});
		const ticketId = result.current.tickets[0].id;
		expect(result.current.tickets[0].completed).toBe(true);
		expect(result.current.totalCompletedTicketsCount()).toBe(1);
		act(() => {
			result.current.toggleTicketCompletion(ticketId);
		});
		expect(result.current.tickets[0].completed).toBe(false);
		expect(result.current.totalCompletedTicketsCount()).toBe(0);
	});

	it("should calculate completed tickets correctly", () => {
		const { result } = renderHook(() => useTicketStore());
		act(() => {
			result.current.clearAllExistingTickets();
		});
		act(() => {
			result.current.addTicket(
				"Login Bug fix",
				"Need to fix the login issue for admin panel",
				"HIGH",
				"suvajit@codewalnut.com",
				true,
			);
			result.current.addTicket(
				"Code Deps",
				"Need to cover all the code deps for admin panel",
				"LOW",
				"suvajit@codewalnut.com",
				false,
			);
			result.current.addTicket(
				"Code Coverage",
				"Need to cover test-cases for all the components less than 80 percent",
				"MEDIUM",
				"suvajit@codewalnut.com",
				true,
			);
		});
		expect(result.current.totalTicketsCount()).toBe(3);
		expect(result.current.totalCompletedTicketsCount()).toBe(2);
		expect(result.current.totalRemainingTicketsCount()).toBe(1);
	});

	it("should clear all the existing tickets from the store", () => {
		const { result } = renderHook(() => useTicketStore());
		act(() => {
			result.current.clearAllExistingTickets();
		});
		act(() => {
			result.current.addTicket(
				"Code Coverage",
				"Need to cover test-cases for all the components less than 80 percent",
				"MEDIUM",
				"suvajit@codewalnut.com",
				true,
			);
			result.current.addTicket(
				"Code Deps",
				"Need to cover all the code deps for admin panel",
				"LOW",
				"suvajit@codewalnut.com",
				false,
			);
		});
		expect(result.current.totalTicketsCount()).toBe(2);
		act(() => {
			result.current.clearAllExistingTickets();
		});
		expect(result.current.totalTicketsCount()).toBe(0);
		expect(result.current.tickets).toHaveLength(0);
	});
});
