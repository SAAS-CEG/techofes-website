import About from "../components/about/About";
import CelebrityCard from "../components/celebrityCard/CelebrityCard";
import RevolveCarousel from "../components/revolveCarousel/revolveCarousel";
import Homeve from "../components/Homeve";
import "./Home.css";

const Home = () => {
  return (
    <div className="mt-20 bg-[#0f0f0f] cursor-default">
      {/* Main Heading */}
      <div className="min-h-96 pt-14 md:pt-0 md:min-h-screen flex flex-col justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
        <h1 className="waviy text-black font-bold text-5xl md:text-8xl tracking-widest -mt-20">
          <center>
            <span className="text-5xl md:text-8xl">TECHOFES `24</span>
          </center>
        </h1>
        <div className="text-lg md:text-3xl mt-16 font-unbounded">
          13th - 16th March 2024
        </div>
      </div>

      {/* About Section */}
      <div className="box">
        <div className="p-5 md:p-10 text-white">
          <About />
        </div>
      </div>

      {/* Main Carousel Section */}
      <div className="bg-sea2 min-h-[525px] md:min-h-screen text-white bg-center bg-no-repeat bg-cover bg-fixed flex flex-col justify-center justify-between md:py-20">
        <RevolveCarousel />
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
        <RevolveCarousel />
      </div>

      {/* Events Section */}
      <div className="bg-black min-h-screen bg-fixed bg-no-repeat bg-cover">
        <Homeve />
      </div>
    </div>
  );
};

export default Home;
