"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
	// const earth = useGLTF("./planet/scene.gltf");
	const earth = useGLTF("./earth/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={8} />
			<primitive
				object={earth.scene}
				scale={2}
				position-y={0}
				rotation-y={0}
			/>
		</mesh>
	);
};

const EarthCanvas = () => {
	return (
		<Canvas
			shadows
			// frameloop="demand"
			frameloop="always"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6],
			}}
			legacy={true}
		>
			{/* <CanvasLoader /> */}
			<Suspense fallback={null}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default EarthCanvas;
