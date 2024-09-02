/* eslint-disable react/prop-types */
import { CardActions } from "@mui/material";
import RegistrationModal from "./RegisterModal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FlipCard = ({ event }) => {
  return (
    <div className="w-[280px] h-[320px] md:w-[350px] md:h-[380px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="blur-load absolute backface-hidden w-full h-full  rounded-xl text-neutral-200 flex flex-col items-center justify-center bg-white/[0.2] shadow-[4px_4px_30px_#0000009d]  backdrop-blur-md mt-0">
          <img
            src={event.image}
            // width={350}
            // height={330}
            className="w-full h-full rounded-xl"
            alt="image"
          // placeholderSrc="https://upload.wikimedia.org/wikipedia/en/1/1d/CEG_main_logo.png"  
          />
          <h1 className="text-2xl font-unbounded font-semibold my-4">
            {event.eventName}
          </h1>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-white/[0.2] shadow-[4px_4px_30px_#0000009d] backdrop-blur-md overflow-hidden rounded-xl">
          <div className="text-center flex flex-col items-center justify-center h-full text-neutral-200 px-2 pb-24">
            <h1 className="md:text-3xl text-xl font-unbounded font-semibold mb-6 mt-6">
              {event.eventName}
            </h1>
            <p className="font-unbounded font-light md:text-[16px] md:leading-5 text-[12px]">
              {event.description}
            </p>
            {/* <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
							Register
						</button> */}
            <CardActions className="w-40 flex justify-center px-6 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 ">
              <RegistrationModal event={event} />
            </CardActions>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
