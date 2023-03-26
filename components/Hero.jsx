import React, { Fragment } from "react";
import StarsCanvas from "@/components/canvas/Stars";
import Image from "next/image";

const Hero = (props) => {
	return (
		<Fragment>
			<section
				id="hero"
				// className="relative h-full min-h-[calc(100vh-80px)]"
				className="relative h-full min-h-screen -z-10"
			>
				<StarsCanvas />
				<div className="absolute -z-10 inset-0 hidden lg:block">
					<Image
						src={"/assets/img/herobg.png"}
						fill={true}
						className="scale-105 opacity-30"
						sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
						alt="Img"
						priority
					/>
				</div>
			</section>
		</Fragment>
	);
};

export default Hero;
