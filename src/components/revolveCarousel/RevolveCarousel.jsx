import "./revolveCarousel.css";

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
          src="src\assets\shows\2nd.webp"
          alt=""
          className="w-screen h-screen"
        />
      </div>
      <div className="pic w-full	 md:w-full	h-full	 flex flex-col items-center">
        <img
          src="src\assets\shows\4th.webp"
          alt=""
          className="w-screen h-screen"
        />
      </div>
      <div className="pic w-full	 md:w-full	h-full	 flex flex-col items-center">
        <img
          src="src\assets\shows\5th.webp"
          alt=""
          className="w-screen h-screen"
        />
      </div>
      <div className="pic w-full	 md:w-full	h-full	 flex flex-col items-center">
        <img
          src="src\assets\shows\6th.webp"
          alt=""
          className="w-screen h-screen"
        />
      </div>

      <div className="pic w-full	 md:w-full	h-full	 flex flex-col items-center">
        <img
          src="src\assets\shows\8th.webp"
          alt=""
          className="w-screen h-screen"
        />
      </div>
    </div>
  );
};

export default RevolveCarousel;
