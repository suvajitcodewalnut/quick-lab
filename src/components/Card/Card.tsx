// Modules
import type { JSX } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import type { CardPropTypes } from "./Card.types";

const Card = ({
	title,
	description,
	priority,
	assignedTo,
	markComplete,
}: CardPropTypes): JSX.Element => {
	return (
		<div className="flex flex-col justify-between h-full min-h-[200px] border-2 border-white bg-[#0b0f19] p-5 rounded-2xl hover:cursor-pointer hover:scale-[1.02] transition-all duration-200 shadow-lg sm:min-h-[220px] md:min-h-60 lg:min-h-[260px]">
			<div>
				<div className="flex items-center justify-between mb-3">
					<h2 className="text-white font-semibold text-xl truncate">{title}</h2>

					<div className="flex items-center gap-3">
						<span className="px-3 py-1 rounded-full bg-blue-800 text-white text-xs sm:text-sm font-semibold">
							{priority}
						</span>

						<button
							type="button"
							aria-label="button-delete"
							title="Delete Task"
							onClick={() => null}
							className="hover:text-red-500 text-white transition-colors"
						>
							<AiFillDelete size={22} />
						</button>
						<button
							type="button"
							aria-label="button-mark-as-complete"
							title="Mark Complete"
							onClick={markComplete}
							className="hover:text-green-500 text-white transition-colors"
						>
							<FaCircleCheck size={18} />
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
