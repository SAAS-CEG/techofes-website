import { useState } from "react";
// import { TextField, Button, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import { object, string } from "zod";

const Sign_in_new = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const schema = object({
    email: string().email("Invalid email format").min(5),
    password: string().min(8, "Password must be at least 8 characters"),
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      console.log("Form data:", formData);
      // Add your sign-in logic here
    } catch (error) {
      let obj = {};
      error.errors.forEach((err) => {
        obj[err.path[0]] = err.message;
      });
      setErrors(obj);
    }
  };

  return (
    <div className="flex justify-center align-items-center my-[100px] p-5 font-anta">
      <div className="md:w-1/3  h-full mt-4 bg-white rounded-md p-6 demo">
        <div className="flex items-center justify-center flex-col gap-2">
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
            Sign In
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="email"
            className="w-full p-3 rounded-full text-xl text-black outline-none border-none px-5 shadow-xl"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full p-3 rounded-full text-xl text-black outline-none border-none px-5 shadow-xl"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <button
            className="bg-transparent
          w-full
          rounded-full
          hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-3 px-4 border border-purple-500 hover:border-transparent transition duration-500"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-7">
          <p className="text-white font-semibold text-[18px]">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-700 cursor-pointer font-bold "
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sign_in_new;
