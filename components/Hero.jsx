"use client";
import React, { Fragment, useRef, useEffect, useState } from "react";
import { StarsCanvas, EarthCanvas, VehicleCanvas } from "@components";
import Image from "next/image";

const Hero = (props) => {
	const [opacity, setOpacity] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setOpacity(true);
		}, 1000);
	}, []);

	return (
		<Fragment>
			<section
				id="hero"
				// className="relative h-full min-h-[calc(100vh-80px)]"
				className="relative h-full w-full max-w-full min-h-screen flex items-center overflow-hidden "
			>
				<StarsCanvas opacity={opacity} />
				<div
					className={`absolute -z-10 inset-0 hidden lg:block transition-all duration-700 ${
						opacity ? "opacity-100" : "opacity-0"
					}`}
				>
					<VehicleCanvas />
				</div>
				<div className="absolute -z-10 inset-0 hidden lg:block ">
					<Image
						src={"/assets/img/herobg.png"}
						fill={true}
						className="scale-105 opacity-30"
						sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
						alt="Img"
						priority
					/>
				</div>
				<div className="relative container grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 z-10 lg:mt-0 mt-10">
					<div className="relative col-span-2 flex items-center z-10">
						<div className="relative">
							<h1 className="text-6xl font-semibold text-white">
								Hi, my
							</h1>
							<h1 className="text-5xl my-4 font-semibold text-white">
								name is Ibrahim
							</h1>

							<p className="mt-5 mb-14 text-white text-base">
								I love creating beautiful user experiences.
							</p>

							<a
								href="#"
								className="text-sm rounded-full bg-primary-400 text-white px-5 py-3 font-semibold"
							>
								Get in touch
							</a>
						</div>
					</div>
					<div className="md:relative absolute lg:col-span-3 col-span-2 h-[60vh] w-full">
						{/* <EarthCanvas /> */}
						{/* <VehicleCanvas /> */}
					</div>
				</div>
			</section>

			<div className="absolute -bottom-6 w-screen h-56 bg-gradient-to-b from-black/0 to-slate-900 z-10 "></div>
			<div className="absolute -bottom-6 w-screen h-48 bg-gradient-to-b from-black/0 to-slate-900 z-10 "></div>
		</Fragment>
	);
};

export default Hero;
