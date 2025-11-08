// Modules
import type React from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useSidebarStore } from "../../store/useSidebar";
import Dashboard from "../Dashboard/Dashboard";

const Sidebar: React.FC = () => {
	const size = useScreenSize();
	const { isOpen } = useSidebarStore();

	return (
		<div
			className={`${
				size.width > 500 ? "w-95" : "w-75"
			} z-1000 fixed top-0 right-0 h-full border-l-2 border-white bg-[#050a12] transform transition-transform duration-300 ${
				isOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div className="text-white p-4 mt-20">
				<Dashboard />
			</div>
		</div>
	);
};
export default Sidebar;
