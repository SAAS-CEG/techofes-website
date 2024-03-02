import canvas from "../assets/sponsers/canvas.png";
import sflogo from "../assets/sponsers/sflogo.png";
import mk from "../assets/sponsers/mk.jpg";
import touriga from "../assets/sponsers/touriga.png";
import "./Merchandise.css";

const Sponsors = () => {
  return (
    <div className="mt-20 bg-g pb-20">
      <div className="flex items-center justify-center p-8 pt-10 pb-5  text-white font-anta">
        <h1 className="text-3xl md:text-5xl font-anta">OUR SPONSORS</h1>
      </div>

      <div className="flex flex-col md:flex-row bk  justify-evenly w-[95%] py-8 mx-auto">
        <div>
          <a href="#">
            <img
              className="h-60 w-60 hover:scale-110 transition-all mx-auto"
              src={canvas}
              alt=""
            />
          </a>
          <h3 className="text-center text-lg p-4 font-anta font-bold">
            Creative Technology Partner
          </h3>
        </div>
        <div>
          <a href="#">
            <img
              className="h-60 w-60 hover:scale-110 transition-all mx-auto"
              src={sflogo}
              alt=""
            />
          </a>
          <h3 className="text-center text-lg p-4 font-anta font-bold">
            OTT Partner
          </h3>
        </div>
        <div>
          <a href="#">
            <img
              className="h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl"
              src={mk}
              alt=""
            />
          </a>
          <h3 className="text-center text-lg p-4 font-anta font-bold">
            Refreshments Partner
          </h3>
        </div>
        <div>
          <a href="#">
            <img
              className=" h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl"
              src={touriga}
              alt=""
            />
          </a>
          <h3 className="text-center text-lg p-4 font-anta font-bold">
            Travel Partner
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
