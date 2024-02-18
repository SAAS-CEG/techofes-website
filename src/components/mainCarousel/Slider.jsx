import { useEffect } from 'react';
import './Maincaro.css';
import { djNight, concertNight, T77_logopng } from '../../assets';

const Slider = () => {
	useEffect(() => {
		console.clear();
		const cardcarousel = document.querySelector('.cardcarousel');
		playAnimation(cardcarousel);
	});

	let interval;

	function arrayFromNodeList(nodelist) {
		return [].slice.call(nodelist);
	}

	function rotateCards(cards) {
		cards.forEach((card) => {
			const classes = card.classList;
			if (classes.contains('right')) {
				classes.remove('right');
			} else if (classes.contains('left')) {
				classes.remove('left');
				classes.add('right');
			} else {
				classes.add('left');
			}
		});
	}

	function playAnimation(cardcarousel) {
		cardcarousel.classList.remove('paused');
		const cards = arrayFromNodeList(cardcarousel.querySelectorAll('.revolveCard'));
		rotateCards(cards);
		clearInterval(interval);
		return (interval = setInterval(() => {
			rotateCards(cards);
		}, 5000));
	}

	return (
		<div className="w-screen cardcarousel">
			{/* <div id="" className="bg-sea1 h-20 w-20 revolveCard left">
				1
			</div> */}
			<img src={djNight} alt="" className="revolveCard left" />
			<img src={concertNight} alt="" className="revolveCard" />
			<img src={T77_logopng} alt="" className="revolveCard right" />
			{/* <div id="item2" className="revolveCard">
				2
			</div>
			<div id="item3" className="revolveCard right">
				3
			</div> */}
		</div>
	);
};

export default Slider;
