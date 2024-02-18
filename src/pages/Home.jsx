import About from "../components/About";
import CelebrityCard from "../components/CelebrityCard";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
        <h1 className="font-black text-6xl">Parallax</h1>
      </div>

      <div className="p-10">
        <About />
      </div>

      <div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed flex flex-col justify-center py-20">
        <div>
          <div className="text-center text-6xl">Celebrities </div>
          <div className="md:px-20 mt-14 w-full flex justify-around items-center flex-wrap flex gap-10">
            <CelebrityCard classId="celebrity-card1" />
            <CelebrityCard classId="celebrity-card2" />
            <CelebrityCard classId="celebrity-card3" />
          </div>
        </div>
      </div>

      <div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover"></div>
    </div>
  );
};

export default Home;
