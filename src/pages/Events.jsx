import FlipCard from "../components/FlipCard";
import { eventRegistrationDetails } from "../constants/Constants";

const Events = () => {
  return (
    <div className="w-full z-0 mt-20 overflow-hidden p-5 bg-g min-h-[85vh]">
      <div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
        <h1 className="font-anta font-bold">EVENTS</h1>
      </div>
      <div className="w-full flex justify-center my-20 mt-0 items-center">
        <div className="flex md:flex-row flex-col flex-wrap w-full h-full justify-evenly items-center gap-20">
          {eventRegistrationDetails.map((event) => {
            return <FlipCard event={event} key={event.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
