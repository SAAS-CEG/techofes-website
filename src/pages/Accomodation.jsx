import { useEffect } from "react";

const Accomodation = () => {
	useEffect(() => {
		window.scrollTo({
		  top: 0,
		  behavior: "smooth"
		});
	  }, []);
	  
	return (
		<div>
			<div className='h-full lg:min-h-[60vh] min-h-[85vh] w-[100%] pb-11 mt-20 cursor-default bg-cover bg-g bg-no-repeat'>
				<div className='flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta'>
					<h1 className='font-anta font-bold'>ACCOMMODATION</h1>
				</div>

				<div className='flex flex-col justify-center md:p-10 mb-20 bk w-4/5 md:w-3/5 m-auto p-5 text-white'>
					<h1 className='font-anta md:text-2xl text-lg '>
						Any troubles on where to stay? We have you covered. We have
						accommodation options to ensure a comfortable and hassle-free
						experience for all of you.<br></br>
						<span className="text-black text-base">** You can also register on-spot in the accommodation desk during the fest **</span>
					</h1>
					<h2 className='font-anta md:text-2xl text-lg font-bold mt-16 '>
						WITH FOOD - ₹400
					</h2>
					<h2 className='font-anta md:text-2xl text-lg font-bold mt-6'>
						WITHOUT FOOD - ₹250
					</h2>
				</div>
				<div className='sm:mt-20 mt-10 flex flex-wrap sm:w-full  justify-evenly sm:justify-center sm:gap-8 gap-6 text-white'>
					<button
						className="bg-gray-700 sm:px-8 px-4 py-2 sm:py-4 text-lg sm:text-2xl rounded-2xl"
					>
						<a href="https://forms.gle/5ctFd3Vb8Cfz8Ymo7" target="_blank" style={{textDecoration: "none"}}>
							Avail your music room
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Accomodation;
