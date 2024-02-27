import './revolveCarousel.css';
import { concertNight, djNight, T77_logojpg } from '../../assets';

const RevolveCarousel = () => {
	return (
		<div className='pic-ctn  flex justify-center item-center top-100  text-base md:text-2xl px-5 md:p-0'>
			<div className='pic w-full	 md:w-full	 h-full	 flex flex-col items-center'>
				{/* <h1 className='mb-4 font-unbounded'>DJ Night</h1> */}
				<img
					src={djNight}
					alt=''
					className='w-screen h-screen'
				/>
			</div>
			<div className='pic w-full	 md:w-full	 h-full	 flex flex-col items-center'>
				{/* <h1 className='mb-4 font-unbounded'>Concert Night</h1> */}
				<img
					src={concertNight}
					alt=''
					className='w-screen h-screen'
				/>
			</div>
			<div className='pic w-full	 md:w-full	h-full	 flex flex-col items-center'>
				{/* <h1 className='mb-4 font-unbounded'>T-awards</h1> */}
				<img
					src={T77_logojpg}
					alt=''
					className='w-screen h-screen'
				/>
			</div>
		</div>
	);
};

export default RevolveCarousel;
