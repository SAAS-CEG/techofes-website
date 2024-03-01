/* eslint-disable react/prop-types */
import { CardActions } from "@mui/material";
import RegistrationModal from "./RegisterModal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FlipCard = ({ event }) => {
  return (
    <div className="w-[300px] h-[350px] md:w-[350px] md:h-[380px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="blur-load absolute backface-hidden w-full h-full border-y-2 border-neutral-300 rounded-xl text-neutral-200 flex flex-col items-center justify-center">
          <LazyLoadImage
            src={event.image_link}
            width={300}
            height={280}
            className="w-full h-full rounded-2xl"
            alt="image"
            placeholderSrc="https://upload.wikimedia.org/wikipedia/en/1/1d/CEG_main_logo.png"
          />
          <h1 className="text-2xl font-unbounded font-semibold mt-5">
            {event.title}
          </h1>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-neutral-800/25 overflow-hidden border-x-2 rounded-xl">
          <div className="text-center flex flex-col items-center justify-center h-full text-neutral-200 px-2 pb-24">
            <h1 className="text-3xl font-unbounded font-semibold mb-6 mt-6">
              {event.title}
            </h1>
            <p className="font-unbounded font-light">{event.details}</p>
            {/* <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
							Register
						</button> */}
            <CardActions className="w-40 flex justify-center px-6 py-2 font-semibold text-white rounded-md absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              <RegistrationModal event={event} />
            </CardActions>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
