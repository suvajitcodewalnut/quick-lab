// Modules
import type { JSX } from "react";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { useTicketStore } from "../../store/useTicket";
import type { CardPropTypes } from "./Card.types";

const Card = ({
	id,
	title,
	description,
	priority,
	assignedTo,
	isTicketResolved,
	deleteTicket,
}: CardPropTypes): JSX.Element => {
	const { toggleTicketCompletion } = useTicketStore();

	//   Store handler function
	const handleTicketCompletionStatusToggle = (
		id: string,
		isTicketResolved: boolean,
	) => {
		toggleTicketCompletion(id);
		if (isTicketResolved) {
			toast.success("TICKET REINITIALIZED!");
		} else {
			toast.success("TICKET RESOLVED!");
		}
	};

	return (
		<div
			className={` ${
				isTicketResolved ? "border-green-500" : "border-white"
			} flex flex-col justify-between h-full min-h-[200px] border-2  bg-[#0b0f19] p-5 rounded-2xl hover:cursor-pointer hover:scale-[1.02] transition-all duration-200 shadow-lg sm:min-h-[220px] md:min-h-60 lg:min-h-[260px]`}
		>
			<div>
				<div className="flex items-center justify-between mb-3">
					<h2 className="text-white font-semibold text-xl truncate">{title}</h2>

					<div className="flex items-center gap-3">
						{!isTicketResolved && (
							<span className="px-3 py-1 rounded-full bg-blue-800 text-white text-xs sm:text-sm font-semibold">
								{priority}
							</span>
						)}

						<button
							type="button"
							aria-label="button-delete"
							title="Delete Task"
							onClick={deleteTicket}
							className="hover:text-red-500 text-white transition-colors"
						>
							<AiFillDelete size={22} />
						</button>
						<button
							type="button"
							aria-label="button-mark-as-complete"
							title="Mark Complete"
							onClick={() =>
								handleTicketCompletionStatusToggle(id, isTicketResolved)
							}
							className=" text-white transition-colors"
						>
							{isTicketResolved ? (
								<IoCloseCircle
									size={20}
									className="text-green-500 hover:cursor-pointer"
								/>
							) : (
								<FaCircleCheck
									size={18}
									className="hover:text-green-500 hover:cursor-pointer"
								/>
							)}
						</button>
					</div>
				</div>
				<p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3">
					{description}
				</p>
			</div>

			<div className="flex items-center justify-between text-sm mt-auto pt-3 border-t border-white/10">
				<span className="text-gray-400 flex flex-wrap gap-1 text-xs">
					Assigned to:
					<span className="text-purple-400 font-medium break-all text-xs">
						{assignedTo}
					</span>
				</span>
			</div>
		</div>
	);
};

export default Card;
