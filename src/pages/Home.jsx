import About from "../components/about/About";
import CelebrityCard from "../components/celebrityCard/CelebrityCard";
import RevolveCarousel from "../components/revolveCarousel/revolveCarousel";
import Homeve from "../components/Homeve";
import "./Home.css";

const Home = () => {
  return (
    <div className="mt-20 bg-[#0f0f0f] cursor-default">
      {/* Main Heading */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
        <h1 className="waviy text-black font-bold text-5xl md:text-8xl tracking-widest -mt-20">
          <center>
            <span>TECHOFES '24</span>
          </center>
        </h1>
        <div className="text-3xl mt-16 font-unbounded">
          4th - 8th April 2024
        </div>
      </div>

      {/* About Section */}
      <div className="p-10 text-white">
        <About />
      </div>

      {/* Main Carousel Section */}
      <div className="bg-sea2 min-h-screen text-white bg-center bg-no-repeat bg-cover bg-fixed flex flex-col justify-center justify-between py-20">
        <RevolveCarousel />
      </div>

      {/* Celebrities Section */}
      <div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover">
        <div className="py-10">
          <div className="text-center text-6xl font-anta text-black">
            Celebrities{" "}
          </div>
          <div className="md:px-20 mt-14 w-full justify-around items-center flex-wrap flex gap-10">
            <CelebrityCard classId="celebrity-card1" />
            <CelebrityCard classId="celebrity-card2" />
            <CelebrityCard classId="celebrity-card3" />
          </div>
        </div>
      </div>

      {/* Proshows Section */}
      <div className="min-h-screen text-white">
        <h1 className="text-6xl text-center mt-10 font-anta">Proshows</h1>
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
