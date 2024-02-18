import { useState } from "react";
import { eventRegistrationDetails } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const Homeve = () => {
  //   console.log(eventRegistrationDetails);
  const [events] = useState(eventRegistrationDetails.slice(0, 3));
  //   console.log(events);

  const navigate = useNavigate();

  return (
    <div className="pt-5">
      <div className="flex justify-center items-center text-6xl py-10">
        <h1 className="font-anta">Events</h1>
      </div>
      <div className="p-5 flex gap-5 justify-center items-center">
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
          className="text-gray-100 font-courgette hover:scale-110 transition duration-300"
        >
          view more...
        </button>
      </div>
    </div>
  );
};

export default Homeve;
