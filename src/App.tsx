// Modules
import type React from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Confirmation from "./components/Modal/Confirmation/Confirmation";
import Form from "./components/Modal/Form/Form";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import { useTicketStore } from "./store/useTicket";

const App: React.FC = () => {
	const { tickets } = useTicketStore();
	const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
	const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
		useState<boolean>(false);
	const [ticketID, setTicketID] = useState<string>("");

	return (
		<>
			<Toaster
				position="bottom-left"
				toastOptions={{
					style: {
						background: "#0b1220",
						border: "2px solid white",
						padding: "5px 10px",
						color: "white",
						borderRadius: "30px",
					},
				}}
			/>
			<div className="justify-center h-screen w-full">
				<div className="relative w-full min-h-full bg-[#0b1220] dark:bg-[#050a12] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[32px_32px] bg-repeat">
					<Navigation onFormModalOpen={() => setIsFormModalOpen(true)} />
					<Sidebar />
					{isFormModalOpen && (
						<Form onFormModalClose={() => setIsFormModalOpen(false)} />
					)}
					{isConfirmationModalOpen && (
						<Confirmation
							selectedTicketID={ticketID}
							onConfirmationModalClose={() => setIsConfirmationModalOpen(false)}
						/>
					)}
					<div className="px-5 py-7 md:px-10 lg:px-25">
						<div>
							{tickets.length === 0 && (
								<div className="mt-10 flex items-center justify-center text-gray-500">
									NO TICKETS AVAILABLE
								</div>
							)}
						</div>
						<div
							className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}
						>
							{tickets.length !== 0 &&
								tickets.map((ticket) => (
									<div key={ticket.id}>
										<Card
											id={ticket.id}
											title={ticket.title}
											description={ticket.description}
											assignedTo={ticket.assignedTo}
											priority={ticket.priority}
											isTicketResolved={ticket.completed}
											onDeleteTicket={() => {
												setIsConfirmationModalOpen(true);
												setTicketID(ticket.id);
											}}
										/>
									</div>
								))}
						</div>
					</div>
					<div>
						{tickets.length !== 0 && (
							<Button
								onConfirmationModalOpen={() => setIsConfirmationModalOpen(true)}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
