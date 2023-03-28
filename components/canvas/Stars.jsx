"use client";

import { useState, useRef, Suspense } from "react";
import { Color } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 1.2 })
	);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere ?? [0, 0, 1]}
				stride={3}
				frustumCulled
				{...props}
			>
				<PointMaterial
					transparent
					color={new Color(255, 255, 255)}
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = ({ opacity }) => {
	return (
		<div
			className={`w-full h-auto absolute inset-0 z-[-1] transition-all duration-700 ${
				opacity ? "opacity-100" : "opacity-0"
			}`}
		>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
