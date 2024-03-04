// import { Button } from "@/components/ui/button";
// import { TextField, Button } from "@mui/material";
import { object, string } from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [student, setStudent] = useState(false);
  const schema = object({
    Name: string()
      .min(5, {
        message: "Name must be at least 5 characters",
      })
      .max(50, {
        message: "Name must be at most 50 characters",
      }),
    regno: string({
      message: "Enter the number",
    }).min(10, {
      message: "Invalid Register Number",
    }),
    email: string().email({
      message: "Invalid email",
    }),
    password: string().min(8, {
      message: "Password must be at least 8 characters",
    }),
    confirmPassword: string().min(8, {
      message: "Password must be at least 8 characters",
    }),
  });
  const [formData, setFormData] = useState({
    Name: "",
    regno: "",
    email: "",
    mobileno: null,
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear errors for the changed <f></f>ield
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    try {
      schema.parse(formData);
      console.log("Form data:", formData);
    } catch (error) {
      let obj = {};
      for (let i = 0; i < error.issues.length; i++) {
        obj[error.issues[i].path[0]] = error.issues[i].message;
      }
      setErrors(obj);
    }
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
              onClick={() => setStudent(true)}
            >
              CEGINAN
            </div>
            <div
              className={`flex-1 text-center p-3 font-semibold text-white font-anta  rounded-3xl cursor-pointer ${
                !student ? "bg-purple-600" : "bg-transparent"
              }`}
              onClick={() => setStudent(false)}
            >
              Others
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            label="Name"
            name="Name"
            value={formData.Name}
            placeholder="Name"
            onChange={handleChange}
            className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
          />
          <input
            label="Register Number"
            name="regno"
            placeholder="Register Number"
            value={formData.regno}
            onChange={handleChange}
            className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
          />

          <input
            label="Email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
          />
          <input
            type="tel"
            maxLength={10}
            placeholder="Mobile Number"
            value={formData.mobileno}
            name="mobileno"
            onChange={handleChange}
            className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
          />
          <input
            label="Password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
          />
          <input
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="py-3 px-4 text-[18px] rounded-full shadow-md outline-none"
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
