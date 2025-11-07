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

const App: React.FC = () => {
	const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
	const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
		useState<boolean>(false);

	return (
		<>
			<Toaster
				position="bottom-center"
				toastOptions={{
					style: {
						background: "#0b1220",
						border: "2px solid white",
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
							onConfirmationModalClose={() => setIsConfirmationModalOpen(false)}
						/>
					)}
					<div className="px-5 py-7 md:px-10 lg:px-25">
						<div
							className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}
						>
							<Card
								title="Login fix"
								description="Users are unable to login to the application and redirected to the 404 error page"
								assignedTo="suvajit@codewalnut.com"
								priority="High"
								markComplete={() => null}
								deleteTicket={() => setIsConfirmationModalOpen(true)}
							/>
						</div>
					</div>
					<div>
						<Button
							onConfirmationModalOpen={() => setIsConfirmationModalOpen(true)}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
