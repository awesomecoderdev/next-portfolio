"use client";
// import "./shared.css";
// import "./fonts.css";
import { useState, useEffect, Fragment } from "react";
import Lenis from "@studio-freight/lenis";

import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const Wrapper = (props) => {
	const { children, params } = props;
	const [loadingVisisble, setLoadingVisible] = useState(true);

	//Create cursor icon
	// useEffect(() => {
	// 	new CursorIcon();
	// }, []);

	/**
	 * Smooth scroll
	 * and unlock scrolling after loading is complete
	 */
	useEffect(() => {
		setTimeout(() => {
			const lenis = new Lenis({
				lerp: 0.1,
				smooth: true,
			});

			const scrollFn = () => {
				lenis.raf();
				requestAnimationFrame(scrollFn);
			};
			requestAnimationFrame(scrollFn);
		}, 3800);
	}, []);

	return (
		<Fragment>
			{loadingVisisble ? (
				<Fragment>
					<div className="flex justify-center items-center">
						<LoadingScreen setLoadingVisible={setLoadingVisible} />
					</div>
				</Fragment>
			) : null}
			{children}
		</Fragment>
	);
};

export default Wrapper;
