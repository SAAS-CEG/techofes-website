/* eslint-disable react/prop-types */
import { CardActions } from "@mui/material";
import RegistrationModal from "./RegisterModal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FlipCard = ({ event }) => {
  return (
    <div className="w-[400px] h-[380px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="blur-load absolute backface-hidden w-full h-full">
          <LazyLoadImage
            src={event.image}
            width={400}
            height={380}
            className="w-full h-full"
            alt="image"
            placeholderSrc={event.smallImage}
          />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold mb-3">{event.eventName}</h1>
            <p>{event.description}</p>
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
