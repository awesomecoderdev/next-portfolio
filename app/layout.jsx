import Cookies from "@/components/Cookies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Poppins } from "next/font/google";
import Wrapper from "@/components/Wrapper";

export const metadata = {
	title: {
		default: process.env.APP_NAME + " |  Mohammad Ibrahim",
		template: "%s | " + process.env.APP_NAME,
	},
};

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout(props) {
	const { children, params } = props;

	return (
		<html lang="en">
			<body
				className={`antialiased text-slate-500 dark:text-slate-400  bg-white dark:bg-slate-900 h-full min-h-screen ${poppins.className}`}
			>
				<Wrapper>
					<Header {...props} />
					{children}
					<Cookies />
				</Wrapper>
			</body>
		</html>
	);
}
