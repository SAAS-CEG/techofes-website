import React, { useEffect, useState } from 'react';
import pro1 from './../../assets/pro events/pro1.svg';
import './ProEventCard.css';

const ProEventCard = () => {
	const [isVisibleLeft, setIsVisibleLeft] = useState(false);
	const [isVisibleRight, setIsVisibleRight] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const slideInLeftElement = document.getElementById('.slide-in-left');
			const slideInRightElement = document.querySelector('.slide-in-right');

			// Calculate the position of the left element relative to the viewport
			const leftElementTop = slideInLeftElement.getBoundingClientRect().top;
			const leftElementBottom = slideInLeftElement.getBoundingClientRect().bottom;

			// Calculate the position of the right element relative to the viewport
			const rightElementTop = slideInRightElement.getBoundingClientRect().top;
			const rightElementBottom = slideInRightElement.getBoundingClientRect().bottom;

			// If the left element is in the viewport, trigger slide-in animation
			if (leftElementTop < window.innerHeight && leftElementBottom > 0) {
				setIsVisibleLeft(true);
			} else {
				setIsVisibleLeft(false); // Slide back when scrolled out of view
			}

			// If the right element is in the viewport, trigger slide-in animation
			if (rightElementTop < window.innerHeight && rightElementBottom > 0) {
				setIsVisibleRight(true);
			} else {
				setIsVisibleRight(false); // Slide back when scrolled out of view
			}
		};

		// Add event listener for scroll
		window.addEventListener('scroll', handleScroll);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); // Empty dependency array to ensure effect runs only once

	return (
		<div className="flex">
			<div className={`slide-in-left mx-10 z-10 glass w-80 h-96 bg-gradient-to-br rounded-2xl from-neutral-700 via-neutral-950 to-tranparent border border-gray-400 ${isVisibleLeft ? 'active' : ''}`}>
				{/* <div className="absolute -top-10 -left-10 z-0 rounded-full w-20 h-20 bg-orange-400" /> */}
				<img src={pro1} className="absolute bottom-4 left-10" alt="pro1" />
				<h1 id="title" className="absolute -bottom-0 w-full text-4xl text-center">
					CONCERT NIGHT
				</h1>
			</div>

			{/* <div className="mx-10 z-10 glass relative w-80 h-96 bg-gradient-to-br rounded-2xl from-neutral-700 via-neutral-950 to-tranparent border border-gray-400">
				<div className="absolute -top-10 -left-10 z-0 rounded-full w-20 h-20 bg-violet-600" />
				<img src={pro1} className="absolute bottom-4 left-10" alt="pro1" />
				<h1 id="title" className="absolute -bottom-0 w-full text-4xl text-center">
					CONCERT NIGHT
				</h1>
			</div> */}

			<div
				className={`slide-in-right mx-10 z-10 glass w-80 h-96 bg-gradient-to-br rounded-2xl from-neutral-700 via-neutral-950 to-tranparent border border-gray-400 ${isVisibleRight ? 'active' : ''}`}
			>
				{/* <div className="absolute -top-10 -left-10 z-0 rounded-full w-20 h-20 bg-sky-400" /> */}
				<img src={pro1} className="absolute bottom-4 left-10" alt="pro1" />
				<h1 id="title" className="absolute -bottom-0 w-full text-4xl text-center">
					CONCERT NIGHT
				</h1>
			</div>
		</div>
	);
};

export default ProEventCard;
