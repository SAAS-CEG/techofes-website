import { useState } from "react";
import { eventRegistrationDetails } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const Homeve = () => {
  //   console.log(eventRegistrationDetails);
  const [events] = useState(eventRegistrationDetails.slice(0, 3));
  //   console.log(events);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center items-center text-4xl p-3">
        <h1>Events</h1>
      </div>
      <div className="p-5 flex gap-5 justify-center items-center">
        {events.map((event, index) => {
          return (
            <div
              key={index}
              className="h-[300px] w-[300px] bg-white relative top-10 rounded-lg text-black"
            >
              <h2>{event.eventName}</h2>
              <img src={event.image} width={350} height={350} />
            </div>
          );
        })}
        <button onClick={() => navigate("/events")}>view more...</button>
      </div>
    </div>
  );
};

export default Homeve;
