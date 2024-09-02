import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { useAuth } from "./AuthContext";

const cookies = new Cookies();

const Profile = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	// const { logout } = useAuth();
	const user = cookies.get("user");
	if(user.is_cegian) {
		user.college = "CEG";
		user.pincode = "600025";
	}

	return (
		<>
			<div className="w-full z-0 mt-20 overflow-hidden p-5 bg-cover bg-g bg-no-repeat min-h-[100vh] h-full">
				<div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
					<h1 className="font-anta font-bold">PROFILE</h1>
				</div>
				<div className="flex justify-center align-middle w-[100%] h-[80%]">
					<div className="flex flex-col justify-center align-middle bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg p-8 max-w-md w-full">
						{user.t_id && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">TID</strong> &nbsp; : &nbsp; {user.t_id}</h4>}
						{user.name && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">NAME</strong> &nbsp; : &nbsp; {user.name}</h4>}
						{user.roll_no && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">ROLL NUMBER</strong> &nbsp; : &nbsp; {user.roll_no}</h4>}
						{user.email && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">EMAIL</strong> &nbsp; : &nbsp; {user.email}</h4>}
						{user.ph_no && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">PHONE</strong> &nbsp; : &nbsp; {user.ph_no}</h4>}
						{user.college && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">COLLEGE</strong> &nbsp; : &nbsp; {user.college}</h4>}
						{user.dept && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">DEPARTMENT</strong> &nbsp; : &nbsp; {user.dept}</h4>}
						{user.year && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">YEAR</strong> &nbsp; : &nbsp; {user.year}</h4>}
						{user.pincode && <h4 className="text-center text-white font-anta text-xl p-2 "><strong className="font-extrabold">PINCODE</strong> &nbsp; : &nbsp; {user.pincode}</h4>}
					</div>
				</div>
				{/* <div className='sm:mt-20 mt-10 flex flex-wrap sm:w-full  justify-evenly sm:justify-center sm:gap-8 gap-6 text-white'>
					<button
						className="bg-gray-700 sm:px-8 px-4 py-2 sm:py-4 text-lg sm:text-2xl rounded-2xl"
						onClick={logout()}
					>
						Logout
					</button>
				</div> */}
			</div>
		</>
	);
}

export default Profile;
