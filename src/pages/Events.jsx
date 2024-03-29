import { useEffect, useRef, useState } from "react";
import FlipCard from "../components/FlipCard";
import { eventRegistrationDetails } from "../constants/constants";
import { CardActions } from "@mui/material";
import { canvasSpaceEvents } from "../constants/constants";
const { VITE_APP_BASE_URL } = import.meta.env;
const Events = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const [eventDetailsOg, setEventDetailsOg] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);
  const [pno, setpno] = useState(1)
  const [numbers, setNumbers] = useState(null)

  function getEventsForPage(pageNumber) {
    setpno(pageNumber)
    const startIndex = (pageNumber - 1) * 6;
    const endIndex = startIndex + 6;
    setStart(startIndex);
    setEnd(endIndex);
    setEventDetails(eventDetailsOg.slice(startIndex, endIndex));
    scrollToTop()
  }

  const convertTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    return formattedTime
  }

  const convertDate = (dateTimeString) => {
    const datePart = dateTimeString.split("T")[0];
    const [year, month, day] = datePart.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
  }

  async function getData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    if (response.status === 400) {
      error = true;
    }
    return response.json(); // parses JSON response into native JavaScript objects
  }

  useEffect(() => {
    const getEventDetails = async () => {
      try {
        // const res = await getData(`${VITE_APP_BASE_URL}/api/events`);
        let eventsFromServer = canvasSpaceEvents;
        // let eventsFromServer = eventRegistrationDetails[0];
        let events = eventsFromServer.map((event) => ({
          id: event.e_id,
          eventName: event.title,
          image: event.image_link,
          description: event.details,
          entry_pass: event.entry_pass,
          prize_money: event.prize_money,
          time: event.time,
          date: event.date,
        }));
        setEventDetailsOg(events);
        setEventDetails(events);
        const count = Math.ceil(eventsFromServer.length / 6);

        const numbersTemp = [];

        for (let i = 1; i <= count; i++) {
          numbersTemp.push(i);
        }
        setNumbers(numbersTemp)
      } catch (err) {
        console.error(err);
      }
    }
    getEventDetails();
  }, [])

  return (
    <div className="w-full z-0 mt-20 overflow-hidden p-5 bg-cover bg-g bg-no-repeat min-h-[100vh] h-full">
      <div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
        <h1 className="font-anta font-bold">EVENTS</h1>
      </div>
      <div className="w-full flex justify-center my-20 mt-0 items-center md:w-[80%] mx-auto">
        <div className="flex md:flex-row flex-col flex-wrap w-full h-full justify-evenly items-center gap-20">
          {eventDetails && eventDetails.map((event) => (
            // <FlipCard event={event} key={event.id} />
            <div className="w-[280px] h-[560px] md:w-[350px] md:h-[490px] bg-transparent cursor-pointer group perspective text-white">
              <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="font-anta blur-load absolute backface-hidden w-full h-full  rounded-xl text-neutral-200 flex flex-col items-center justify-center bg-white/[0.2] shadow-[4px_4px_30px_#0000009d]  backdrop-blur-md mt-0">
                  <img
                    src={event.image}
                    // width={350}
                    // height={330}
                    className="w-full h-[400px] md:h-full rounded-xl"
                    alt="image"
                  // placeholderSrc="https://upload.wikimedia.org/wikipedia/en/1/1d/CEG_main_logo.png"
                  />
                  <h1 className="px-[20px] text-xl font-unbounded font-semibold my-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    {event.eventName}
                  </h1>
                  <div className="w-full py-[10px] px-[15px]  flex items-center justify-between flex-col md:flex-row gap-[20px]">
                    <div>
                      {event.time && <p>
                        <span className="text-gray-300">Time:</span> <span className="font-semibold">{convertTime(event.time)}</span>
                      </p>}

                      {event.date && <p>
                        <span className="text-gray-300">Date:</span> <span className="font-semibold">{convertDate(event.date)}</span>
                      </p>}
                    </div>
                    <div>
                      {event.entry_pass != 0 && <p>
                        <span className="text-gray-300">Entry Fee:</span> <span className="font-semibold">₹{event.entry_pass}</span>
                      </p>}

                      {event.prize_money != 0 && <p>
                        <span className="text-gray-300">Prize:</span> <span className="font-semibold">₹{event.prize_money}</span>
                      </p>}
                      {event.prize_money == 0 && event.entry_pass == 0 && (
                        <div className="h-[20px] "></div>
                      )}
                    </div>
                  </div>
                  <div>

                  </div>
                  <div>

                  </div>
                  <div>

                  </div>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-white/[0.2] shadow-[4px_4px_30px_#0000009d] backdrop-blur-md overflow-hidden rounded-xl">
                  <div className="text-center flex flex-col items-center justify-center h-full text-neutral-200 px-2 pb-24">
                    <h1 className="md:text-3xl text-xl font-unbounded font-semibold mb-6 mt-6">
                      {event.eventName}
                    </h1>
                    <p className="font-unbounded font-light md:text-[16px] md:leading-5 text-[12px]">
                      {event.description}
                    </p>
                    <div className="font-anta bg-white/[0.2] mt-[20px] py-[10px] px-[20px]">
                      <a href="microcontest" target="_blank">Join Now</a>
                    </div>
                    <CardActions className="w-40 flex justify-center px-6 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 ">
                      {/* <RegistrationModal event={event} /> */}
                    </CardActions>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="text-white flex items-center w-full justify-center gap-[10px]">
        {numbers && numbers.map((page) => (
          <div
            key={page}
            className={`${page == pno ? "font-bold text-2xl" : "text-md"}  font-anta  w-[50px] text-center px-[15px] py-[7px] rounded-sm bg-white/[0.2] shadow-[4px_4px_30px_#0000009d]  backdrop-blur-md mt-0 cursor-pointer`}
            onClick={() => getEventsForPage(page)}
          >
            {page}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Events;
