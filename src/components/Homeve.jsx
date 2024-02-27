import { useState } from 'react';
import { eventRegistrationDetails } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

const Homeve = () => {
	//   console.log(eventRegistrationDetails);
	const [events] = useState(eventRegistrationDetails.slice(0, 3));
	//   console.log(events);

	const navigate = useNavigate();

	return (
		<div className='md:pt-5 pb-20 md:pb-0'>
			<div className='flex justify-center items-center text-6xl py-10'>
				<h1 className='font-anta text-white text-3xl md:text-6xl'>Events</h1>
			</div>
			<div className='flex justify-center'>
				{/* <div className='flex w-4/5 p-5 md:p-10 rounded-xl mb-20'></div> */}
				<div className=''>
					<h1 className='text'>Coming soon...</h1>
				</div>
			</div>

			{/* <div className="md:p-5 flex gap-5 justify-center items-center flex-wrap">
        {events.map((event, index) => {
          return (
            <div
              key={index}
              className="h-[300px] w-[300px] bg-white relative rounded-lg text-black flex flex-col justify-between p-5 pt-2 hover:scale-105 transition duration-300 ease-in-out"
            >
              <h2 className="text-center text-xl font-unbounded h-1/5 flex justify-center items-center">
                {event.eventName}
              </h2>
              <img src={event.image} className="w-full h-4/5 rounded-lg" />
            </div>
          );
        })}
        <button
          onClick={() => navigate("/events")}
          className="w-[300px] md:w-[100px] text-gray-100 font-courgette hover:scale-110 transition duration-300"
        >
          view more...
        </button>
      </div> */}
		</div>
	);
};

export default Homeve;
