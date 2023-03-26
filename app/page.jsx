import Image from "next/image";
import { Fragment } from "react";
import { Hero } from "@components";

export default function Page() {
	return (
		<Fragment>
			<Hero />
			{/* <div className="h-screen bg-black opacity-100"> */}
			<div className="relative h-screen bg-black opacity-10">
				<div className="absolute -top-40 w-screen h-64 bg-gradient-to-b from-black/10 to-black/100"></div>
			</div>
			{/* <div className="h-screen bg-pink-200"></div>
			<div className="h-screen bg-green-200"></div>
			<div className="h-screen bg-red-200"></div>
			<div className="h-screen bg-lime-200"></div> */}
		</Fragment>
	);
}
