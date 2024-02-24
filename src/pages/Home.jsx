import About from "../components/about/About";
import CelebrityCard from "../components/celebrityCard/CelebrityCard";
import RevolveCarousel from "../components/revolveCarousel/revolveCarousel";
import Homeve from "../components/Homeve";
import "./Home.css";
import Logo from "../../src/assets/T77_logo.png";
import { useState } from "react";
import ProEventCard from "../components/proEventCard/ProEventCard";

const Home = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="mt-20 bg-[#0f0f0f] cursor-default">
      {/* Main Heading */}
      <div className="min-h-56 pt-14 md:pt-0 md:min-h-[90vh] flex flex-col justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex items-center"
        >
          {!hover && (
            <div id="title" className="text-8xl w-full text-center">
              South India's Biggest <br /> SaaS Event is here!!
            </div>
          )}
          {hover && (
            <div className="w-full flex justify-between items-center">
              <div id="title" className="text-8xl text-left w-2/3">
                South India's <br />
                Biggest <br />
                SaaS Event is <br />
                here!!
              </div>
              <div className="w-1/2 p-10">
                <img src={Logo} className="w-full h-full" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="p-5 md:p-10 text-white">
        <About />
      </div>

      {/* Main Carousel Section */}
      <div className="bg-sea2 min-h-[525px] md:min-h-screen text-white bg-center bg-no-repeat bg-cover bg-fixed flex flex-col justify-center justify-between md:py-20">
        {/* <RevolveCarousel /> */}
      </div>

      {/* Celebrities Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen bg-fixed bg-no-repeat bg-cover">
        <div className="py-10">
          <div className="text-center text-3xl font-bold md:text-6xl font-anta text-white">
            Celebrities
          </div>
          <div className="md:px-20 mt-14 w-full justify-around items-center flex-wrap flex gap-10">
            <CelebrityCard classId="celebrity-card1" />
            <CelebrityCard classId="celebrity-card2" />
            <CelebrityCard classId="celebrity-card3" />
          </div>
        </div>
      </div>

      {/* Proshows Section */}
      <div className="min-h-[525px] md:min-h-screen text-white">
        <h1 className="text-3xl md:text-6xl text-center mt-10 font-anta">
          Proshows
        </h1>
        {/* <RevolveCarousel /> */}
        <ProEventCard />
      </div>

      {/* Events Section */}
      {/* <div className="bg-black min-h-screen bg-fixed bg-no-repeat bg-cover">
				<Homeve />
			</div> */}
    </div>
  );
};

export default Home;
