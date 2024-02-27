import { useState, useEffect } from 'react';
import './About.css'; // Import CSS file for animation styles
import { T77_logopng } from './../../assets/index/';
import logo from '../../assets/logo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-out-quart',
			delay: 100,
		});
	}, []);

	return (
		<div className='z-10 flex flex-col md:flex-row justify-center items-center p-2 md:p-10 about-outer'>
			<div
				className='w-full md:w-1/2'
				data-aos='fade-down-right'
			>
				<div className='glass p-8 border-none'>
					<div className='text-xl md:text-3xl mb-5 font-anta flex justify-center items-center'>
						ABOUT US
					</div>
					<div className='text-sm md:text-lg text-center font-thin tracking-wide font-viga'>
						Techofes, celebrated as the largest cultural festival in South
						India, is gearing up for its 77th edition. As CEG's renowned
						inter-college cultural fest, Techofes provides a vibrant platform
						for students from across the nation to showcase their diverse
						talents. With numerous events, workshops, and shows, the festival is
						dedicated to nurture creativity and celebrating soulful talents. The
						theme for this year,"Eco Beats," echoes Techofes's commitment to
						fostering global connections and sustainability. This theme infuses
						every aspect of the festival, shaping around captivating events
						spanning various art forms over three exhilarating days. The
						excitement culminates in the electrifying pro shows like Concert
						Night, DJ Night, and the T-Awards screening, offering an
						unforgettable experience that transcends words.
					</div>
				</div>
			</div>
			<div
				className='w-full md:w-1/2 flex justify-center about-slide-in-right'
				data-aos='fade-up-left'
			>
				<img
					src={logo}
					className='w-3/5'
				></img>
			</div>
		</div>
	);
};

export default About;
