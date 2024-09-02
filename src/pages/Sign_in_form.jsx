// import { Button } from "@/components/ui/button";
// import { TextField, Button } from "@mui/material";
// import { boolean, number, object, string } from "zod";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { VITE_APP_BASE_URL } = import.meta.env;
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import FormControl from "@mui/material/FormControl";
// import { toast } from "sonner";
// import { LoaderIcon } from "lucide-react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import {user} from "../redux/slice/user";
// import { useDispatch } from "react-redux";
// import OAuth from "@/pages/OAuth";

const Sign_in_form = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	let error = false;
	const [student, setStudent] = useState(true);
	const [errors, setErrors] = useState(null);
	const navigate = useNavigate();
	async function signup(formData) {
		console.log(errors);
		if (errors === null) {
			try {
				console.log("Form data:", formData);
				const res = await postData(`${VITE_APP_BASE_URL}/api/signup`, formData);
				if (error) {
					console.log(res);
					setErrors((errors) => {
						if (errors === null) {
							return [res.message];
						}
						return [...errors, res.message];
					});
				} else {
					console.log(res);
					navigate("/signin");
				}
			} catch (error) {
				console.log(error);
			}
		}
	}

	async function postData(url = "", data = {}) {
		const response = await fetch(url, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(data),
		});

		// console.log(response);
		if (response.status === 400) {
			error = true;
		}
		return response.json(); // parses JSON response into native JavaScript objects
	}

	const [formData, setFormData] = useState({
		name: "",
		rollno: 0,
		email: "",
		phNo: 0,
		password: "",
		confirmPassword: "",
		isCegian: student,
		pincode: 0,
		year: 0,
		college: "",
		dept: "",
	});

	function resetData() {
		setFormData({
			name: "",
			rollno: 0,
			email: "",
			phNo: 0,
			password: "",
			confirmPassword: "",
			isCegian: student,
			pincode: 0,
			year: 0,
			college: "",
			dept: "",
		});
	}

	const validateEmail = (email) => {
		return email.match(
			"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
		);
	};

	const handleChange = (e) => {
		let { name, value } = e.target;
		if (
			name === "year" ||
			name === "phNo" ||
			name === "pincode" ||
			name === "rollno"
		) {
			value = Number(value);
		}
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		setErrors(() => {
			return null;
		});
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setErrors((errors) => {
				if (errors === null) {
					return ["Passwords doesn't match. Please check it."];
				}
				return [...errors, "Passwords doesn't match. Please check it."];
			});
		}
		if (formData.password.length < 8) {
			setErrors((errors) => {
				if (errors === null) {
					return ["Password must be at least 8 characters long !"];
				}
				return [...errors, "Password must be at least 8 characters long !"];
			});
		}
		if (validateEmail(formData.email)) {
			setErrors((errors) => {
				if (errors === null) {
					return ["Please enter valid email"];
				}
				return [...errors, "Please enter valid email"];
			});
		}
		signup(formData);
	};
	return (
		<>
			<div className="w-2/3 md:w-1/3 h-full my-[130px] rounded-md  sign_in_div  px-10 py-10 font-anta">
				<div className="flex items-center justify-center flex-col gap-2 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-12 h-12 p-2 rounded-full shadow-lg text-white bg-purple-500"
					>
						<path
							fillRule="evenodd"
							d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
							clipRule="evenodd"
						/>
					</svg>
					<h1
						className="font-extrabold tracking-wide text-3xl text-center mb-6
              italic font-anta
        "
					>
						Sign Up
					</h1>
				</div>
				<div
					className="flex items-center justify-center mb-7 border
          border-purple-700
          rounded-full
        overflow-hidden
       "
				>
					<div className="w-full flex items-center height-full">
						<div
							className={`flex-1 text-center p-3 font-anta text-white font-bold italic  rounded-3xl cursor-pointer ${
								student ? "bg-purple-600" : "bg-transparent"
							}`}
							onClick={() => {
								setStudent(true);
								resetData();
							}}
						>
							CEGIAN
						</div>
						<div
							className={`flex-1 text-center p-3 font-semibold text-white font-anta  rounded-3xl cursor-pointer ${
								!student ? "bg-purple-600" : "bg-transparent"
							}`}
							onClick={() => {
								setStudent(false);
								resetData();
							}}
						>
							Others
						</div>
					</div>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-6">
					<input
						label="Name"
						name="name"
						type="text"
						value={formData.name}
						placeholder="Name"
						onChange={handleChange}
						className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
						required
					/>
					<input
						label="Register Number"
						name="rollno"
						type="number"
						placeholder="Register Number"
						value={formData.rollno === 0 ? "" : formData.rollno}
						onChange={handleChange}
						className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
					/>
					{student && (
						<input
							label="Department"
							name="dept"
							type="text"
							value={formData.dept}
							placeholder="Department"
							onChange={handleChange}
							className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
							required
						/>
					)}
					{!student && (
						<input
							label="College"
							name="college"
							type="text"
							value={formData.college}
							placeholder="College"
							onChange={handleChange}
							className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
							required
						/>
					)}
					<input
						label="year"
						name="year"
						type="number"
						placeholder="Year"
						value={formData.year === 0 ? "" : formData.year}
						onChange={handleChange}
						className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
						required
					/>
					{!student && (
						<input
							label="Pin code"
							name="pincode"
							type="number"
							placeholder="Pin code"
							value={formData.pincode === 0 ? "" : formData.pincode}
							onChange={handleChange}
							className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
							required
						/>
					)}

					<input
						label="Email"
						name="email"
						type="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
						required
					/>
					<input
						type="tel"
						maxLength={10}
						placeholder="Mobile Number"
						value={formData.phNo === 0 ? "" : formData.phNo}
						name="phNo"
						onChange={handleChange}
						className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
						required
					/>
					<input
						label="Password"
						name="password"
						type="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
						className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
						required
					/>
					<input
						label="Confirm Password"
						name="confirmPassword"
						type="password"
						placeholder="Confirm Password"
						value={formData.confirmPassword}
						onChange={handleChange}
						className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
						required
					/>

					<button
						className="bg-transparent
          w-full
          rounded-full
          hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-3 px-4 border border-purple-500 hover:border-transparent transition duration-500 outline-none"
						type="submit"
					>
						Submit
					</button>
					{errors !== null && (
						<div className="bg-red-500 text-white rounded-3xl w-full text-xl sm:text-md text-center my-8 p-4 h-full">
							{errors.map((error, i) => (
								<p key={i}>{error}</p>
							))}
						</div>
					)}
				</form>
				<div className="text-center mt-4">
					<p className="font-semibold text-white">
						Have an account?{" "}
						<Link
							to="/signin"
							className="text-blue-700 cursor-pointer font-bold"
						>
							Sign In
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Sign_in_form;
