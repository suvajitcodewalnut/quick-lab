// Modules
import { Toaster } from "react-hot-toast";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
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
					<Navigation />
					<Sidebar />
					<div className="px-5 py-7 md:px-10 lg:px-25">
						<div
							className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
						></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
