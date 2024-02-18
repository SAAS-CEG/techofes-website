import About from '../components/about/About';
import CelebrityCard from '../components/celebrityCard/CelebrityCard';
import Slider from '../components/mainCarousel/Slider.jsx';
import RevolveCarousel from '../components/revolveCarousel/revolveCarousel';

const Home = () => {
	return (
		<div>
			<div className="min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
				<h1 className="text-black font-bold text-8xl font-playFair">TECHOFES</h1>
			</div>

			<div className="p-10">
				<About />
			</div>

			<div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed flex flex-col justify-center py-20">
				<RevolveCarousel />
			</div>

			<div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover">
				<div className="py-10">
					<div className="text-center text-6xl font-anta">Celebrities </div>
					<div className="md:px-20 mt-14 w-full justify-around items-center flex-wrap flex gap-10">
						<CelebrityCard classId="celebrity-card1" />
						<CelebrityCard classId="celebrity-card2" />
						<CelebrityCard classId="celebrity-card3" />
					</div>
				</div>
			</div>
			{/* <Slider /> */}
			<h1 className="text-4xl text-center mt-10">Proshows</h1>
			<RevolveCarousel />
		</div>
	);
};

export default Home;
