import FlipCard from "../components/FlipCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(function () {
    async function fetchEvents() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/events`
        );
        const data = res.data.events;
        console.log(data);
        setEvents(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchEvents();
  }, []);
  return (
    <div className="w-full z-0 mt-20 overflow-hidden p-5 bg-neutral-800/45">
      <div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
        <h1>EVENTS</h1>
      </div>
      <div className="w-full flex justify-center my-20 mt-0 items-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 -ml-24 md:ml-0 sm:gap-x-14 gap-y-20">
          {events.map((event) => {
            return <FlipCard event={event} key={event.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
