import About from "../components/about/About";
import CelebrityCard from "../components/celebrityCard/CelebrityCard";
import Slider from "../components/mainCarousel/Slider";
import RevolveCarousel from "../components/revolveCarousel/revolveCarousel";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
        <h1 className="font-black text-6xl">TECHOFES</h1>
      </div>

      <div className="p-10">
        <About />
      </div>

      <div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed">
        <div className="mt-20">
          <div className="text-center text-6xl">Celebrities </div>
          <div className="mt-20 w-full flex justify-center items-center">
            <CelebrityCard key="card1" />
          </div>
        </div>
      </div>
      <RevolveCarousel />

      <div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
