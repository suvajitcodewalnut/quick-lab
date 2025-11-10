// Modules

import type { JSX } from "react";
import { useTicketStore } from "../../store/useTicket";

const Dashboard = (): JSX.Element => {
	const {
		totalTicketsCount,
		totalCompletedTicketsCount,
		totalRemainingTicketsCount,
	} = useTicketStore();

	return (
		<div>
			<div className="font-bold text-2xl">DASHBOARD</div>
			<div className="mt-5">
				<div className="border-2 border-white rounded-2xl  mt-2 p-4 flex items-center justify-between bg-green-600">
					<span className="font-bold">COMPLETED</span>
					<span className="font-bold">{totalCompletedTicketsCount()}</span>
				</div>
				<div className="border-2 border-white rounded-2xl  mt-2 p-4 flex items-center justify-between bg-amber-600">
					<span className="font-bold">REMAINING</span>
					<span className="font-bold"> {totalRemainingTicketsCount()}</span>
				</div>
				<div className="border-2 border-white rounded-2xl mt-2 p-4 flex items-center justify-between bg-purple-600">
					<span className="font-bold">TOTAL</span>
					<span className="font-bold">{totalTicketsCount()}</span>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
