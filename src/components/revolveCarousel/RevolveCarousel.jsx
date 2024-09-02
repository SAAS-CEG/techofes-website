import "./revolveCarousel.css";
import proshowbg1 from "../../assets/shows/2nd.webp";
import proshowbg2 from "../../assets/shows/4th.webp";
import proshowbg3 from "../../assets/shows/5th.webp";
import proshowbg4 from "../../assets/shows/8th.webp";0
import proshowbg5 from "../../assets/shows/6th.webp";


const RevolveCarousel = () => {
  return (
    <div className="hidden lg:block pic-ctn lg:flex justify-center relative item-center top-100  text-base md:text-2xl px-5 md:p-0">
      <h1
        className="text-3xl md:text-6xl absolute top-[100px] text-center mt-2  z-10 mb-10 font-anta font-bold"
      >
        Our Pro-Shows
      </h1>
      <div className="pic w-full	 md:w-full	 h-full	 flex flex-col items-center">
        <img
          src={proshowbg1}
          alt=""
          className="w-screen h-screen"
        />
      </div>
      <div className="pic w-full	 md:w-full	h-full	 flex flex-col items-center">
        <img
          src={proshowbg2}
          alt=""
          className="w-screen h-screen"
        />
      </div>
      <div className="pic w-full	 md:w-full	h-full	 flex flex-col items-center">
        <img
          src={proshowbg3}
          alt=""
          className="w-screen h-screen"
        />
      </div>
      <div className="pic w-full	 md:w-full	h-full	 flex flex-col items-center">
        <img
          src={proshowbg4}
          alt=""
          className="w-screen h-screen"
        />
      </div>

      <div className="pic w-full	 md:w-full	h-full	 flex flex-col items-center">
        <img
          src={proshowbg5}
          alt=""
          className="w-screen h-screen"
        />
      </div>
    </div>
  );
};

export default RevolveCarousel;
