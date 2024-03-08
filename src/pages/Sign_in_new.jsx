import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const { VITE_APP_BASE_URL } = import.meta.env;

let error = false;



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
  const [formData, setFormData] = useState({email: "",password: "",});
  const [errorMsg,setErrorMsg]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
 const {isLoggedIn,setLoggedIn,User,setUser,pages}=useContext(LoginContext);

  const navigate = useNavigate();
  async function fetchData() {
    try {
      const res = await postData(`${VITE_APP_BASE_URL}/api/login`,formData);
      console.log(res.token)
        if(res.token){
         console.log(res.token);
         navigate('/');
         console.log(res.user.name)
         setUser(res.user.name);
         setFormData({email: "",password: "",});
        }
        else if(res.message){
          setErrorMsg((errors) => [...errors,res.message]) //if there is wrong pass/EMail
        }
    } 
    catch (error) {
      console.log(error)
      setFormData({email: "",password: "",});
    }
    finally{
      setIsLoading(false);
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
    setErrorMsg([]);
    console.log("Form data:", formData);
    const res = await fetchData();
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
            type="email"
            value={formData.email}
            required
            disabled={isLoading}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter your Password"
            className="w-full p-3 rounded-full text-xl text-black outline-none border-none px-5 shadow-xl"
            value={formData.password}
            disabled={isLoading}
            onChange={handleChange}
          />
          
          <button
            className={`
          w-full
          rounded-full
           font-semibold hover:text-white py-3 px-4 border hover:border-transparent transition duration-500 outline-none ${isLoading? "bg-green-400 hover:bg-green-600 text-white": "bg-transparent border-purple-500 hover:bg-purple-500 text-purple-700"}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Login"}
          </button>
          {errorMsg !== null && errorMsg[0] && (
            <div className="bg-red-500 text-white rounded-3xl w-full text-xl sm:text-md text-center my-8 p-4 h-full">
              {errorMsg.map((error, i) => (
                <p key={i}>{error}</p>
              ))}
            </div>
          )}
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
