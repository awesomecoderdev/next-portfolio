import Image from "next/image";
import { Fragment, Suspense } from "react";
import { Hero, VehicleCanvas } from "@components";
export default function Page() {
	return (
		<Fragment>
			<Hero />
			{/* <div className="h-screen bg-black opacity-100"> */}
			{/* <div className="relative h-screen bg-black opacity-20"></div> */}
			<div className="relative h-screen">
				<VehicleCanvas />
			</div>
			{/* <div className="h-screen bg-pink-200"></div>
			<div className="h-screen bg-green-200"></div>
			<div className="h-screen bg-red-200"></div>
			<div className="h-screen bg-lime-200"></div> */}
		</Fragment>
	);
}
