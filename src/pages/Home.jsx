<<<<<<< HEAD
import Slider from '../components/Slider.jsx';
// import { Title } from '../components/Title';
import RevolveCarousel from '../components/revolveCarousel/revolveCarousel';

const Home = () => {
	return (
		<div>
			<div className="min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
				<h1 className="font-black text-6xl">TECHOFES</h1>
				{/* <Title /> */}
			</div>

			{/* <div className="p-10">
				<h2 className="font-bold text-4xl">Sample Section</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet laboriosam dolorum
					suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus quibusdam quas sunt inventore!
				</p>
			</div> */}

			<div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div>
			<RevolveCarousel />

			<div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover">
				<Slider />
			</div>
		</div>
	);
=======
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

      <div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed">
        <div className="mt-20">
          <div className="text-center text-6xl">Celebrities </div>
          <div className="mt-20 w-full flex justify-center items-center">
            <CelebrityCard key="card1" />
          </div>
        </div>
      </div>

      <div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover"></div>
    </div>
  );
>>>>>>> 52e9e332e6481b09bb2715a4a49967bde13b6db1
};

export default Home;
