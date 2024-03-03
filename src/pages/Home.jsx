import About from '../components/about/About';
// import CelebrityCard from "../components/celebrityCard/CelebrityCard";
import RevolveCarousel from '../components/revolveCarousel/revolveCarousel';
import Homeve from '../components/Homeve';
import './Home.css';
import { useState, useEffect } from 'react';
import ProEventCard from '../components/proEventCard/ProEventCard';
import ConfettiComp from './Confetti';
import Countdown from './timer';

const Home = () => {
	const [video, setVideo] = useState(true);
	const [showConfetti, setShowConfetti] = useState(false);

	useEffect(() => {
		const video = document.getElementById('homeVideo');
		video.play().catch((error) => {
			console.error('Video play error:', error);
		});
		setTimeout(() => {
			setVideo(false);
			setShowConfetti(true);
		}, 6000);

		setTimeout(() => {
			setShowConfetti(false);
		}, 5000);
	}, []);

	return (
		<div className='cursor-default overflow-hidden'>
			<div
				id='home'
				className='min-h-96 pt-14 md:pt-0 md:min-h-[120vh] flex flex-col justify-center items-center overflow-hidden relative'
			>
				{video && (
					<div className='min-h-48 w-full pt-14 md:pt-0 md:min-h-[100vh]  backGround flex items-center lg:block'>
						<div className='flex items-center main-title relative w-full md:h-[120vh]'>
							<video
								id='homeVideo'
								autoPlay
								muted
								className='hidden lg:block  absolute top-0 left-0 min-w-full min-h-full object-cover '
							>
								<source
									src='\events\Tiny_Coding.mp4'
									type='video/mp4'
								/>
							</video>
							<div
								id='title'
								className='text-3xl w-full justify-center md:text-6xl lg:text-8xl text-center flex p-0 m-0 z-10 '
								style={{ fontFamily: 'Luckiest Guy' }}
							>
								<span>
									S <br /> C
								</span>
								<span>
									o <br /> u
								</span>
								<span>
									u <br /> l
								</span>
								<span>
									t <br /> t
								</span>
								<span>
									h <br /> u
								</span>
								<span>
									{} <br /> r
								</span>
								<span>
									I <br /> a
								</span>
								<span>
									n <br /> l
								</span>
								<span>
									d <br /> {}
								</span>
								<span>
									i <br /> E
								</span>
								<span>
									a <br /> v
								</span>
								<span>
									&apos; <br /> e
								</span>
								<span>
									s <br /> n
								</span>
								<span>
									{} <br /> t
								</span>
								<span>
									B <br /> {}
								</span>
								<span>
									i <br /> i
								</span>
								<span>
									g <br /> s
								</span>
								<span>
									g <br /> {}
								</span>
								<span>
									e <br /> h
								</span>
								<span>
									s <br /> e
								</span>
								<span>
									t <br /> r
								</span>
								<span>
									{} <br /> e
								</span>
							</div>
						</div>
					</div>
				)}
				{!video && (
					<>
						<div className='title-text disp flex flex-col pb-10 lg:pb-3'>
							{showConfetti && <ConfettiComp />}
							<div
								className='mt-9 z-1 text-5xl md:text-8xl lg:text-9xl pb-2 text-center names  main'
								style={{
									fontFamily: 'Kavoon',
									backgroundImage:
										'linear-gradient(to right, #FFFF99, #FFD700)',
									WebkitBackgroundClip: 'text',
									color: 'transparent',
								}}
							>
								Techofes &apos;77
							</div>
							<div className=' date mt-2 mb-2 md:mt-5 text-center w-full text-1xl md:text-3xl lg:text-3xl names font-extralight text-[#FFFF99]'>
								Mar 13 - Mar 16
							</div>
							<div className='timers'>
								<Countdown />
							</div>
						</div>
					</>
				)}
			</div>
			<div
				id='about'
				className='box'
			>
				<div className=' md:p-10 text-white'>
					<About />
				</div>
			</div>
			<div className='h-full md:h-full text-white flex flex-col justify-center item-center  '>
				<div className='text-center h-24 text-orange-400 text-6xl font-bold mt-20 '>
					70+ INTERESTING EVENTS
				</div>
				<RevolveCarousel />
				<ProEventCard />
			</div>

			<div className=' h-full bg-fixed bg-no-repeat bg-cover mb-[70px]'>
				<Homeve />
			</div>
		</div>
	);
};

export default Home;
