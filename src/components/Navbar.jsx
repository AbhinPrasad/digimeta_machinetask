import React from "react";
import Logo from "../assets/cropped-centaR__1_-removebg-preview.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

const navItems = [
	"Jobs",
	"Teaching Professionals’ Olympiad",
	"The Future of Teaching"
];

const Navbar = ({ toggleTheme, theme }) => {
	return (
		<nav className="w-full h-24 flex items-center justify-center dark:bg-slate-800">
			<div className="flex justify-between items-center gap-4">
				<img src={Logo} alt="" className=" max-h-16 object-contain"/>
				<button className="bg-sky-600 w-24 h-16 rounded text-white font-medium flex items-center justify-center gap-1">
					Explore{" "}
					<RiArrowDropDownLine className="text-gray-600 text-2xl" />{" "}
				</button>
				<form className="flex items-center">
					<span className="absolute ps-3">
						<CiSearch className="dark:text-slate-100" />
					</span>
					<input
						type="search"
						placeholder="Search Courses"
						className="ps-10 text-gray-500 border border-gray-300 rounded-md h-10 w-56 dark:bg-slate-900 dark:border-none dark:text-slate-800 "
					/>
				</form>
				{navItems.map((item) => {
					return (
						<>
							<a
								href="#"
								className="flex items-center justify-center gap-px dark:text-white">
								{item}{" "}
								<RiArrowDropDownLine className="text-gray-600 text-2xl" />
							</a>
						</>
					);
				})}
				<button
					className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-300 dark:bg-slate-900"
					onClick={() => toggleTheme()}>
					{theme !== "dark" ? (
						<IoMdMoon className="text-gray-400 text-2xl" />
					) : (
						<BsSunFill className="text-gray-400 text-2xl" />
					)}
				</button>
				<button className="h-16 w-16 border border-gray-800 border-solid rounded font-medium hover:bg-gray-800 hover:text-white dark:border-white dark:text-white">
					Sign <br />
					in
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
