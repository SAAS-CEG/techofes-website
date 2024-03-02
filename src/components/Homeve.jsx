import { useState } from "react";
import { eventRegistrationDetails } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import FlipCard from "./FlipCard";

const Homeve = () => {
  const [events] = useState(eventRegistrationDetails.slice(0, 3));

  const navigate = useNavigate();

  return (
    <div className="md:pt-5 pb-20 md:pb-0 h-full">
      <div className="flex justify-center items-center text-6xl py-10">
        <h1
          className="font-anta text-white text-3xl md:text-6xl"
          style={{
            fontFamily: "Luckiest Guy",
          }}
        >
          Events
        </h1>
      </div>
      <div className="flex justify-center">
        {/* <div className='flex w-4/5 p-5 md:p-10 rounded-xl mb-20'></div> */}
        <div className="flex md:flex-row flex-col flex-wrap w-full h-full justify-evenly items-center gap-20">
          {eventRegistrationDetails.map((event) => {
            return <FlipCard event={event} key={event.id} />;
          })}
          <a className="" href="/events">
            View more..
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homeve;
