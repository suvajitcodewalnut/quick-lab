// Modules

import { zodResolver as zod } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoCloseCircle } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {
	type TicketFormData,
	TicketSchemaValidators,
} from "../../../validations/Ticket.schema";

const Form: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TicketFormData>({ resolver: zod(TicketSchemaValidators) });

	const onSubmit = (data: TicketFormData) => {
		toast.success("TICKET CREATED SUCCESSFULLY!");
		console.log("FORM VALIDATION DONE !", { data });
	};

	return (
		<div className="fixed inset-0 z-3000 flex items-center justify-center p-4">
			<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				className="relative z-4000 bg-[#050a12] rounded-2xl shadow-2xl p-6 w-full max-w-md  border-2 border-white"
			>
				<div className="flex justify-between items-center mb-5">
					<h2 className="text-xl font-semibold text-white">
						CREATE NEW TICKET
					</h2>
					<button
						type="button"
						className="text-gray-400 hover:text-red-500 hover:cursor-pointer transition"
						aria-label="Close"
					>
						<IoCloseCircle size={20} />
					</button>
				</div>

				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label
							htmlFor="title"
							className="block text-sm font-medium mb-1 text-gray-300"
						>
							Title
						</label>
						<input
							{...register("title")}
							type="text"
							id="title"
							placeholder="Enter title..."
							className="w-full border border-neutral-700 bg-[#0b1220] text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
						/>
						{errors.title && (
							<p className="text-red-500 text-xs flex items-center gap-2">
								<span>
									<RxCross2 />
								</span>
								{errors.title.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="description"
							className="block text-sm font-medium mb-1 text-gray-300"
						>
							Description
						</label>
						<textarea
							{...register("description")}
							id="description"
							placeholder="Enter description..."
							rows={3}
							className="w-full border border-neutral-700 bg-[#0b1220] text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
						/>
						{errors.description && (
							<p className="text-red-500 text-xs flex items-center gap-2">
								<span>
									<RxCross2 />
								</span>
								{errors.description.message}
							</p>
						)}
					</div>

					<div>
						<label
							htmlFor="assignee"
							className="block text-sm font-medium mb-1 text-gray-300"
						>
							Assigned To
						</label>
						<input
							{...register("assignedTo")}
							type="email"
							id="assignee"
							placeholder="Enter email..."
							className="w-full border border-neutral-700 bg-[#0b1220] text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
						/>
						{errors.assignedTo && (
							<p className="text-red-500 text-xs flex items-center gap-2">
								<span>
									<RxCross2 />
								</span>
								{errors.assignedTo.message}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="priority"
							className="block text-sm font-medium mb-1 text-gray-300"
						>
							Priority
						</label>
						<input
							{...register("priority")}
							type="text"
							id="priority"
							placeholder="Enter priority (e.g., High, Medium, Low)..."
							className="w-full border border-neutral-700 bg-[#0b1220] text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
						/>
						{errors.priority && (
							<p className="text-red-500 text-xs flex items-center gap-2">
								<span>
									<RxCross2 />
								</span>
								{errors.priority.message}
							</p>
						)}
					</div>
					<div className="flex justify-end gap-3 pt-3">
						<button
							type="submit"
							className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
						>
							Submit
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};

export default Form;
