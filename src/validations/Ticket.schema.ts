// Modules
import { z } from "zod";

export const TicketSchemaValidators = z.object({
	title: z
		.string()
		.min(3, "Title must be at least 3 characters long!")
		.max(15, "Title too long!"),
	description: z
		.string()
		.min(10, "Description must be at least 10 characters!")
		.max(150, "Description too long!"),
	assignedTo: z.email("Please provide a valid email address!"),
	priority: z
		.string()
		.transform((value) => value.toUpperCase())
		.refine((value) => ["HIGH", "MEDIUM", "LOW"].includes(value), {
			message: "Priority must be either HIGH, MEDIUM or LOW",
		}),
	completed: z.boolean().default(false).optional(),
});

export type TicketFormData = z.infer<typeof TicketSchemaValidators>;
