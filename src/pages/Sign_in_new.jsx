import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const { VITE_APP_BASE_URL } = import.meta.env;
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
let error = false;
let cookies = new Cookies();


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
   if (response.status === 400) {
      error = true;
  }
  return response.json(); // parses JSON response into native JavaScript objects
}

const Sign_in_new = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function fetchData() {
    try {
      const res = await postData(`${VITE_APP_BASE_URL}/api/login`, formData);
      console.log(res.token)  
      if (res.token) {
        const decoded = jwtDecode(res.token)
        cookies.set("jwt_auth", decoded, {
          expires: new Date(decoded.exp * 1000)
        })
         navigate('/');
         setFormData({email: "",password: "",});
        }
        else{
          console.log("hello");
          setErrorMsg(['Wrong password/Email!'])
        }
    } 
    catch (error) {
      console.log(error)
      setFormData({email: "",password: "",});
    }
}
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    const res = await fetchData();
  };
  const [errorMsg,setErrorMsg]= useState([]);

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
          />
          <input
            name="password"
            type="password"
            placeholder="Enter your Password"
            className="w-full p-3 rounded-full text-xl text-black outline-none border-none px-5 shadow-xl"
            value={formData.password}
            onChange={handleChange}
          />
          
          <button
            className="bg-transparent
          w-full
          rounded-full
          hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-3 px-4 border border-purple-500 hover:border-transparent transition duration-500"
          >
            Sign In
          </button>
          <div id="wrong-password" className="bg-red-500 text-white rounded-3xl w-full text-xl sm:text-md text-center my-8 p-4 h-full">
          {errorMsg.map((error, i) => (
                <p key={i}>{error}</p>
              ))}
          </div>
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
