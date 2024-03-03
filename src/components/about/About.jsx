import { useEffect } from 'react';
import './About.css'; // Import CSS file for animation styles

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
		<div className='z-10 flex justify-center items-center p-2 md:p-10 mt-20 '>
			<div className='w-full'>
				<div className='glass p-8 border-none h-full'>
					<div className='text-xl md:text-5xl mb-10 font-anta flex justify-center items-center'>
						ABOUT US
					</div>
					<div className='text-sm md:text-xl text-justify md:text-center font-thin tracking-wide font-viga'>
						Techofes, acclaimed as largest student run cultural fest in South
						India attracts students from all over India organized by the
						Students Association and Arts Society(SAAS) of CEG, Anna University.
						The cultural festival is celebrated for hosting over 100 diverse
						events which includes electrifying pro shows like Concert Night, DJ
						Night,the T-Awards, movie screening offering an unforgettable
						experience that transcends words. In the T awards we recognize the
						upcoming artist and sportsman and honour them with awards.Actor
						Vijay, Actor Sivakarthikeyen, Actor R J Balaji, Actor and singer
						Andrea Jeremiah were some of celebrities honored during Techofes.
						This year marks the 77th edition of Techofes which will be conducted
						from March 13th to 16th. Following the consequest success of
						previous years, this year&apos;s event is anicipated to host with
						the theme &ldquo;Eco Beats&ldquo; where eco echoes Techofes&apos;s
						commitment to fostering global connections and sustainability and
						Beats resonates the music which is the common language of different
						cultures. The SAAS team cordially welcomes students from all over
						the country to participate in this year&apos;s Techofes to showcase
						their talent and create ever-green memories. We promise to take care
						of students from other colleges by giving proper accomodation
						facilities and meeting all the necessary needs.
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
