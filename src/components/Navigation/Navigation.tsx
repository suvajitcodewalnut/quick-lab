// Modules

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { PiTicketFill } from "react-icons/pi";
import useScreenSize from "../../hooks/useScreenSize";

const Navigation = () => {
	const size = useScreenSize();
	return (
		<div className="sticky top-0 border-b-2 border-white py-3 px-3 md:px-20 lg:px-22 bg-[#0a0f1b]  backdrop-blur-2xl">
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-center gap-2 text-white font-semibold font-lg">
					<img className="w-8" src="../../../public/logo.png" alt="logo" />
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
						className="text-xs font-bold flex items-center border-2 border-white px-2 py-1 gap-1 rounded-full bg-white text-black hover:scale-105 transition-all duration-200 hover:cursor-pointer"
					>
						<HiOutlineMenuAlt3 size={25} className="text-black" />
						{size.width > 500 ? "Menu" : ""}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
