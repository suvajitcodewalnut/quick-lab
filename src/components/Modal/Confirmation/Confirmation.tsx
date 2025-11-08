// Modules
import { motion } from "framer-motion";
import type { JSX } from "react";
import toast from "react-hot-toast";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { useTicketStore } from "../../../store/useTicket";
import type { ConfirmationPropTypes } from "./Confirmation.types";

const Confirmation = ({
	onConfirmationModalClose,
	selectedTicketID,
}: ConfirmationPropTypes): JSX.Element => {
	const { clearAllExistingTickets, deleteTicket } = useTicketStore();

	// Store handler function
	const handleClearingAllTickets = () => {
		clearAllExistingTickets();
		toast.success("TICKETS CLEARED!");
		onConfirmationModalClose();
	};

	const handleClearingAParticularTicket = (id: string) => {
		deleteTicket(id);
		toast.success("TICKET DELETED!");
		onConfirmationModalClose();
	};

	return (
		<div className="fixed inset-0 z-3000 flex items-center justify-center p-4">
			<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				className="relative z-4000 bg-[#050a12] rounded-2xl shadow-2xl p-3 w-full max-w-lg  border-2 border-white"
			>
				<div className="flex items-center justify-between">
					<div className="text-white">CONFIRM DELETION ? </div>
					<div className="flex gap-2">
						<button
							type="button"
							aria-label="confirmation-modal-check-button"
							onClick={() => {
								if (selectedTicketID) {
									handleClearingAParticularTicket(selectedTicketID);
								} else {
									handleClearingAllTickets();
								}
							}}
						>
							<IoIosCheckmarkCircle
								size={20}
								className="text-white hover:text-red-500 hover:cursor-pointer hover:scale-105 transition-all duration-200"
							/>
						</button>
						<button
							type="button"
							aria-label="confirmation-modal-close-button"
							onClick={onConfirmationModalClose}
						>
							<IoCloseCircle
								size={20}
								className="text-white hover:text-green-500 hover:cursor-pointer hover:scale-105 transition-all duration-200"
							/>
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Confirmation;
