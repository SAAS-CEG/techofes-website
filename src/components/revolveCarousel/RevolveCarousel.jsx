import './revolveCarousel.css';
import { concertNight, djNight, img1, img2, T77_logojpg } from '../../assets';

const RevolveCarousel = () => {
	return (
		<div className="pic-ctn w-full flex justify-center top-20">
			<img src={concertNight} alt="" className="pic w-[700px] h-[400px]" />
			<img src={djNight} alt="" className="pic w-[700px] h-[400px]" />
			<img src={img1} alt="" className="pic w-[700px] h-[400px]" />
			<img src={img2} alt="" className="pic w-[700px] h-[400px]" />
			<img src={T77_logojpg} alt="" className="pic w-[700px] h-[400px]" />
		</div>
	);
};

export default RevolveCarousel;
