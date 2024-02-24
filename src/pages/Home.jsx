import About from '../components/about/About';
import CelebrityCard from '../components/celebrityCard/CelebrityCard';
import RevolveCarousel from '../components/revolveCarousel/revolveCarousel';
import Homeve from '../components/Homeve';
import './Home.css';
import Logo from '../../src/assets/T77_logo.png';
import { useState } from 'react';
import ProEventCard from '../components/proEventCard/ProEventCard';
import Sponsors from './Sponsors';
import CountDownTimer from '../components/countDownTimer/CountDownTimer';

const Home = () => {
	const [hover, setHover] = useState(false);
	const [animationComplete, setAnimationComplete] = useState(null);

	const handleAnimationEnd = () => {
		setAnimationComplete(true);
	};

	const handleMouseEnter = () => {
		if (animationComplete) {
			setHover(true);
		}
	};

	const handleMouseLeave = () => {
		setHover(false);
	};

	return (
		<div className="bg-[#0f0f0f] cursor-default overflow-hidden">
			{/* Main Heading */}
			<div className="min-h-96 pt-14 md:pt-0 md:min-h-[100vh] flex flex-col justify-center items-center overflow-hidden">
				<div className="min-h-96 w-full pt-14 md:pt-0 md:min-h-[100vh] flex flex-col justify-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center items-center overflow-hidden backGround">
					<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onAnimationEnd={handleAnimationEnd} className="flex items-center main-title">
						{!hover && (
							<div>
								<div id="title" className={`text-8xl w-full text-center ${!hover ? 'animate-in' : ''}`}>
									South India's Biggest <br /> SaaS Event is here!!
								</div>
								<div className="z-50">
									<CountDownTimer timeTillDate="05 26 2024, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
								</div>
							</div>
						)}
						{hover && (
							<div className={`w-full justify-between items-center ${hover ? 'flex animate-in' : 'hidden'}`}>
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
			</div>

			{/* About Section */}
			<div className="box">
				<div className="p-5 md:p-10 text-white">
					<About />
				</div>
			</div>

			{/* Main Carousel Section */}
			<div className="bg-black min-h-[525px] md:min-h-screen text-white flex flex-col justify-center md:py-20">
				<h1 className="text-3xl md:text-6xl text-center mt-2 mb-10 font-anta text-sky-500 font-bold">Our Pro-Events</h1>
				{/* <RevolveCarousel /> */}
				<ProEventCard />
				<div className="text-center text-orange-400 text-6xl font-bold mt-20">25+ INTERESTING EVENTS</div>
			</div>

			{/* Celebrities Section */}
			{/* Gradient background style : bg-gradient-to-r from-slate-900 to-slate-700 */}
			{/*  <div className="bg-black min-h-screen bg-fixed bg-no-repeat bg-cover">
        <div className="py-10">
          <div className="text-center text-3xl font-bold md:text-6xl font-anta text-white">
            Celebrities
          </div>
          <div className="md:px-20 mt-14 w-full justify-around items-center flex-wrap flex gap-10">
            <CelebrityCard classId="celebrity-card1 card-animate" />
            <CelebrityCard classId="celebrity-card2" />
            <CelebrityCard classId="celebrity-card3" />
          </div>
        </div>
      </div> */}
			<Sponsors />

			{/* Events Section */}
			{/* <div className="bg-black min-h-screen bg-fixed bg-no-repeat bg-cover">
				<Homeve />
		</div> */}
		</div>
	);
};

export default Home;
