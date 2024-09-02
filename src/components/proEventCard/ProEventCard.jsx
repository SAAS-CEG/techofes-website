import { useEffect } from "react";
import "./ProEventCard.css";
import "./TextAnimation.css";
import AOS from "aos";
import "aos/dist/aos.css";
import concertNight from "../../assets/concert-night.jpeg";
import concertNight2 from "../../assets/concert-pooja.jpeg";
import Tawards from "../../assets/t-awards.jpeg";

const ProEventCard = () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-out-quart",  //animation
			delay: 100,
		});
	}, []);

	const proEvents = [
		{
			image: concertNight,
			css: "absolute -top-10 -left-10 z-0 rounded-full w-20 h-20 bg-orange-400",
			animation: "fade-down-right",
		},
		{
			image: Tawards,
			css: "absolute -top-10 left-28 z-0 rounded-full w-20 h-20 bg-violet-600",
			animation: "fade-up",
		},
		{
			image: concertNight2,
			css: "absolute -top-10 -right-10 z-0 rounded-full w-20 h-20 bg-sky-400",
			animation: "fade-down-left",
		},
	];

	return (
		<>
			<div className="flex flex-col md:flex-row justify-center items-center m-11 gap-11">
				{proEvents.map((event, i) => {
					return (
						<div
							key={i}
							data-aos={event.animation}
						>
							<div className={event.css} />
							<div className="py-1">
								<img className="w-70 h-70 rounded" src={event.image} alt="proshow"></img>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProEventCard;
