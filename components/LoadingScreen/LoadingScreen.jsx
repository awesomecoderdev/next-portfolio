import { useEffect, useRef } from "react";

const LoadingScreen = ({ setLoadingVisible }) => {
	const rect = useRef(null);
	const container = useRef(null);
	const svg = useRef(null);

	useEffect(() => {
		//loading progress
		rect.current.style.height = 0;

		setTimeout(() => {
			//logo transition
			svg.current.style.height = "2vw";
			svg.current.style.opacity = 0;

			//container transition
			container.current.style.clipPath =
				"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

			//update container visibility
			setTimeout(() => {
				setLoadingVisible(false);
			}, 900);
		}, 2300);
	}, []);

	return (
		<div
			className="loading-container bg-[#0d0e13] flex justify-center items-center"
			ref={container}
		>
			<svg
				viewBox="0 0 108 106"
				className="loading-transition"
				xmlns="http://www.w3.org/2000/svg"
				data-v-76b59a5e=""
				ref={svg}
			>
				<rect
					id="test"
					x="0"
					y="0"
					width="108"
					height="106"
					ref={rect}
				></rect>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M108 0H0V106H108V0ZM92.6929 18.8319C92.6323 18.661 92.5301 18.661 92.4657 18.8319L90.4893 24.1769C90.2245 24.789 89.7371 25.2767 89.1263 25.5406L83.784 27.5274C83.6136 27.5882 83.6136 27.6908 83.784 27.7554L89.1263 29.7383C89.7382 30.0026 90.226 30.492 90.4893 31.1059L92.4657 36.466C92.5301 36.6332 92.6323 36.6332 92.6929 36.466L94.6693 31.1211C94.9364 30.5098 95.423 30.0216 96.0323 29.7535L101.375 27.7706C101.545 27.706 101.545 27.6034 101.375 27.5426L96.0323 25.5558C95.4237 25.2887 94.9372 24.802 94.6693 24.1921L92.6929 18.8319ZM79.498 15.0141C79.864 14.8539 80.1562 14.5608 80.3158 14.1936L81.5047 10.9722C81.5425 10.8696 81.6031 10.8696 81.641 10.9722L82.8261 14.186C82.9845 14.5541 83.277 14.8476 83.6439 15.0065L86.8508 16.1956C86.953 16.2335 86.953 16.2981 86.8508 16.3323L83.6401 17.5327C83.2732 17.6917 82.9807 17.9852 82.8223 18.3533L81.6372 21.5671C81.5993 21.6697 81.5388 21.6697 81.5009 21.5671L80.3158 18.3533C80.1562 17.986 79.864 17.6929 79.498 17.5327L76.2911 16.3399C76.1889 16.3057 76.1889 16.2411 76.2911 16.2032L79.498 15.0141ZM75.6437 49.4808C75.159 50.8104 74.1481 52.6034 73.2205 53.3632C73.2205 53.3632 80.6679 58.0927 83.4319 69.0029C77.7526 66.3057 72.4443 66.3437 67.6245 67.1035C64.5623 64.8306 62.1493 61.79 60.6276 58.2864C60.8964 62.1384 61.6537 65.47 63.2022 67.9658C62.7532 68.066 62.3094 68.1669 61.8708 68.2667C58.367 69.0636 55.1995 69.7841 52.4267 69.4094C53.6231 63.4718 55.7434 59.0082 59.0601 55.6425C56.4211 54.8105 53.2029 52.8883 50.8895 51.2966C56.1661 52.4817 58.7108 51.5926 61.6519 50.565C62.8872 50.1334 64.1925 49.6773 65.7995 49.3402C67.1661 49.0504 68.3103 49.3856 69.4953 49.7327C71.1996 50.2319 72.9882 50.7558 75.6437 49.4808ZM17.1583 45.8719C15.6337 43.2659 14.1874 40.6181 12.8193 37.9286H12.8155C14.0498 35.239 28.8463 6.83528 46.187 6.04133C53.7594 5.69184 58.8594 7.50387 61.3886 13.582C63.6573 19.0273 67.5731 24.1391 71.0999 28.7431C76.5903 35.9104 81.1379 41.8469 77.0597 45.8947C74.206 41.9508 71.5174 43.492 69.0688 44.8956C68.0575 45.4754 67.0871 46.0316 66.163 46.1682C63.3739 46.5806 60.694 45.6009 58.1722 44.6789C55.2817 43.6221 52.5988 42.6412 50.1966 43.9193C45.6986 46.3126 41.9124 53.6937 39.1712 60.5315C41.4657 68.9117 46.187 78.3518 50.9084 86.1393C50.8655 86.1274 50.8242 86.1109 50.7833 86.0947C50.7593 86.0851 50.7354 86.0756 50.7115 86.0672C47.6069 83.4055 44.5968 80.6121 41.6815 77.687C38.125 74.111 34.7641 70.4047 31.5988 66.5678C32.1403 56.0147 34.6278 45.2603 40.4055 34.7604C33.6093 43.6078 30.3532 53.2188 28.4601 62.6323C27.5791 61.4926 26.7146 60.3441 25.8665 59.1867C27.9754 47.3496 32.3258 35.5771 40.4472 24.6175C31.2921 33.6929 26.2149 44.246 22.7467 54.7269C21.8797 53.4505 21.0278 52.1627 20.2024 50.8597C23.9696 38.0691 30.2017 25.6052 40.4926 14.4899C29.1908 23.4589 22.2772 34.6236 17.1583 45.8719ZM10.8126 42.6999C23.0552 65.47 40.5337 84.9823 61.7975 99.6175H61.7937C41.7241 92.3215 23.3144 81.0658 7.65114 66.5147C7.05671 65.9632 6.60046 65.2788 6.31952 64.517C6.03859 63.7552 5.9409 62.9376 6.03442 62.1308C6.34111 59.5021 6.71216 57.4355 6.96205 56.1439C12.5391 63.0577 19.0249 69.8956 27.381 75.628C18.9113 66.7502 13.8605 61.0292 8.04868 51.3422C8.80586 48.4112 9.72866 45.5257 10.8126 42.6999ZM61.7796 72.0122C70.041 70.3279 78.085 68.688 83.4962 72.6763H83.4924C81.8454 80.7982 77.1619 87.8488 71.5053 93.3457C74.894 87.0587 77.692 80.8666 78.949 74.929C74.5503 73.5682 69.8545 73.9668 65.1176 74.3689C60.334 74.775 55.5084 75.1847 50.9046 73.7894C54.433 73.5099 58.1276 72.7567 61.7796 72.0122ZM64.7508 57.0898C66.2353 57.8798 67.8073 58.4918 69.4343 58.9132C69.5922 58.96 69.7617 58.9479 69.9113 58.879C71.55 58.0481 73.0959 57.0447 74.5229 55.8856L74.4413 56.0271C73.5634 57.5489 72.6194 59.1854 71.4296 60.4859C71.2464 60.6873 70.9927 60.8098 70.7216 60.8278C68.8285 60.9608 64.3305 60.2656 63.3044 59.749L64.7508 57.0898Z"
					fill="#0D0E13"
					data-v-76b59a5e=""
				></path>
			</svg>
		</div>
	);
};

export default LoadingScreen;
