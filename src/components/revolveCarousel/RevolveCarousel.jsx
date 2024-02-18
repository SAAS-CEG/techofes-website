import './revolveCarousel.css';
import { concertNight, djNight, img1, img2, T77_logojpg } from '../../assets';

const RevolveCarousel = () => {
	return (
		<div className="pic-ctn w-full flex justify-center top-20 h-[600px] text-2xl">
			<div className="pic w-[700px] h-[400px] flex flex-col items-center">
				<h1 className="mb-4">DJ Night</h1>
				<img src={djNight} alt="" className="w-[700px] h-[400px]" />
			</div>
			<div className="pic w-[700px] h-[400px] flex flex-col items-center">
				<h1 className="mb-4">Concert Night</h1>
				<img src={concertNight} alt="" className="w-[700px] h-[400px]" />
			</div>
			<div className="pic w-[700px] h-[400px] flex flex-col items-center">
				<h1 className="mb-4">T-awards</h1>
				<img src={T77_logojpg} alt="" className="w-[700px] h-[400px]" />
			</div>
		</div>
	);
};

export default RevolveCarousel;
