// Modules

import type { JSX } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import type { ButtonPropTypes } from "./Button.types";

const Button = ({ onConfirmationModalOpen }: ButtonPropTypes): JSX.Element => {
	return (
		<button
			type="button"
			aria-label="clear-all-tickets-button"
			className="absolute bottom-7 right-7"
			onClick={onConfirmationModalOpen}
		>
			<RiDeleteBin5Fill
				size={30}
				className="text-white hover:text-red-500 hover:cursor-pointer hover:scale-110 transition-all duration-200"
			/>
		</button>
	);
};

export default Button;
