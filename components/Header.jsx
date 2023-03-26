"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Header(props) {
	const { title } = props;
	const [toggle, setToggle] = useState(false);

	return (
		<Fragment>
			<header className="w-full absolute top-0 ">
				<div className="container relative flex flex-col px-6 py-8 mx-auto">
					<nav className="md:flex md:items-center md:justify-between">
						<div className="flex items-center justify-between">
							<Link href="/" className="text-2xl font-semibold">
								{/* <img
									className="w-auto h-6 sm:h-7"
									src="https://merakiui.com/images/full-logo.svg"
									alt=""
								/> */}
								<span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
									Awesome
								</span>

								<span className="text-transparent bg-gradient-to-tr bg-clip-text from-primary-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
									Coder
								</span>
							</Link>
							<button
								onClick={(e) => setToggle(!toggle)}
								className="text-gray-500 md:hidden dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
							>
								<span
									className={`${
										!toggle ? "hidden" : "block"
									}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</span>

								<span
									className={`${toggle ? "hidden" : "block"}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
										/>
									</svg>
								</span>
							</button>
						</div>

						<div
							className={`${
								toggle
									? "translate-x-0 opacity-100 "
									: "opacity-0 translate-x-full"
							} absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center`}
						>
							<a
								href="#"
								className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
							>
								About
							</a>
							<a
								href="#"
								className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
							>
								Work
							</a>
							<a
								href="#"
								className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
							>
								Contact
							</a>
						</div>
					</nav>
				</div>
			</header>
		</Fragment>
	);
}
