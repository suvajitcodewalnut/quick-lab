// Modules
import type React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LuArrowRightToLine } from "react-icons/lu";
import { PiTicketFill } from "react-icons/pi";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useSidebar } from "../../store/useSidebar";

const Navigation: React.FC = () => {
	const size = useScreenSize();
	const { isOpen, toggleSidebar } = useSidebar();

	return (
		<div className="z-2000 sticky top-0 border-b-2 border-white py-3 px-3 md:px-20 lg:px-22 bg-[#050a12]  backdrop-blur-2xl">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-center gap-2 text-white font-semibold font-lg">
					<img
						className="w-8"
						src="public\logo.png"
						alt="application-quicklab-logo"
					/>
					<h1 className="text-white font-bold">QUICKLAB</h1>
				</div>
				<div className="flex items-center justify-center gap-3">
					<button
						type="button"
						className="text-xs font-bold flex items-center border-2 border-white px-2 py-1 gap-1 rounded-full bg-white text-black hover:scale-105 transition-all duration-200 hover:cursor-pointer"
					>
						<PiTicketFill size={25} className="text-black" />
						{size.width > 500 ? "Add ticket" : ""}
					</button>
					<button
						type="button"
						aria-label={isOpen ? "menu-close-icon" : "menu-icon"}
						onClick={toggleSidebar}
						className="text-xs font-bold flex items-center border-2 border-white px-2 py-1 gap-1 rounded-full bg-white text-black hover:scale-105 transition-all duration-200 hover:cursor-pointer"
					>
						{isOpen ? (
							<LuArrowRightToLine size={25} className="text-black" />
						) : (
							<HiOutlineMenuAlt3 size={25} className="text-black" />
						)}
						{size.width > 500 ? "Menu" : ""}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
