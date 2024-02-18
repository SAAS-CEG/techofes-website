import { eventRegistrationDetails } from "../constants/constants";
import FlipCard from "../components/FlipCard";

const Events = () => {
  return (
    <div className="w-full z-0">
      <div className="w-full flex justify-center my-20 items-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-14 gap-y-20">
          {eventRegistrationDetails.map((event) => {
            return <FlipCard event={event} key={event.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
