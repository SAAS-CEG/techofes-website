import "./revolveCarousel.css";
import { concertNight, djNight, T77_logojpg } from "../../assets";

const RevolveCarousel = () => {
  return (
    <div className="pic-ctn w-full flex justify-center top-10 h-full text-2xl">
      <div className="pic w-[700px] h-[400px] flex flex-col items-center">
        <h1 className="mb-4 font-unbounded">DJ Night</h1>
        <img src={djNight} alt="" className="w-[700px] h-[400px]" />
      </div>
      <div className="pic w-[700px] h-[400px] flex flex-col items-center">
        <h1 className="mb-4 font-unbounded">Concert Night</h1>
        <img src={concertNight} alt="" className="w-[700px] h-[400px]" />
      </div>
      <div className="pic w-[700px] h-[400px] flex flex-col items-center">
        <h1 className="mb-4 font-unbounded">T-awards</h1>
        <img src={T77_logojpg} alt="" className="w-[700px] h-[400px]" />
      </div>
    </div>
  );
};

export default RevolveCarousel;
