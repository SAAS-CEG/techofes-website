import { useEffect } from 'react';
import canvas from '../assets/sponsers/canvas.png';
import sflogo from '../assets/sponsers/sflogo.png';
import mk from '../assets/sponsers/mk.jpg';
import touriga from '../assets/sponsers/touriga.png';
import zomato from '../assets/sponsers/Zomato_logo.png';
import ads_123 from '../assets/sponsers/123_logo.jpg';
import aram_logo from '../assets/sponsers/aram_logo.jpg';
import flantz from '../assets/sponsers/FLANTZ.jpg';
import fuji from '../assets/sponsers/fuji_logo.jpg';
import ishwaryam from '../assets/sponsers/Ishwaryam-02.png';
import laurels from '../assets/sponsers/LAURELS.png';
import rajams from '../assets/sponsers/rajams-print.png';
import zebronics from '../assets/sponsers/zebronics.jpg';
import toyota from '../assets/sponsers/Toyota-01.jpg';
import vidiem from '../assets/sponsers/Vidiem.jpg';

import './Merchandise.css';

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <div className="mt-20 bg-cover bg-g bg-no-repeat pb-20">
      <div className="flex items-center justify-center p-8 pt-10 pb-5  text-white font-anta">
        <h1 className="text-3xl md:text-5xl font-anta">OUR SPONSORS</h1>
      </div>

			<div className='flex text-white flex-col md:flex-row bk  justify-evenly w-[95%] py-16 mx-auto flex-wrap gap-x-20 gap-y-20'>
				<div>
					<a href='https://www.aramiasacademy.com'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={aram_logo}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Associate Partner
					</h3>
				</div>
				<div>
					<a href='https://www.zomato.com/'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={zomato}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Apparel Partner
					</h3>
				</div>
				<div>
					<a href='https://web.shortfundly.com/'>
						<img
							className='h-60 w-60 hover:scale-110 transition-all mx-auto object-contain'
							src={sflogo}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						OTT Partner
					</h3>
				</div>
				<div>
					<a href='https://zebronics.com'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={zebronics}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Gaming Partner
					</h3>
				</div>
				<div>
					<a href='https://www.google.com/maps/place/123+Ads+Print+-+Flex+%26+UV+print+in+chennai/@13.0591971,80.2722754,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526621de8ea5d7:0xe472056516d81e64!8m2!3d13.0591971!4d80.2722754!16s%2Fg%2F11g81f__0y?entry=ttu'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={ads_123}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Printing Partner
					</h3>
				</div>
				<div>
					<a href='https://rajams.in'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={rajams}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Printing Partner
					</h3>
				</div>
				<div>
					<a href='https://www.toyotabharat.com'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={toyota}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Automobile Partner
					</h3>
				</div>
				<div>
					<a href='https://www.instagram.com/flantz_media?igsh=YzljYTk1ODg3Zg=='>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={flantz}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						event Partner
					</h3>
				</div>
				<div>
					<a href='https://laurelstrophy.com'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={laurels}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Awards & Trophy Partner
					</h3>
				</div>
				<div>
					<a href='https://instax.com'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={fuji}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Moments Partner
					</h3>
				</div>
				<div>
					<a href='https://ishwaryamgoodness.com'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain '
							src={ishwaryam}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Gift Partner
					</h3>
				</div>
				<div>
					<a href='https://www.vidiem.in'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={vidiem}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Appliances Partner
					</h3>
				</div>
				<div>
					<a href='https://www.satturmittaikadai.com/'>
						<img
							className='h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={mk}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Refreshments Partner
					</h3>
				</div>
				<div>
					<a href='https://www.instagram.com/touriga_holidays/'>
						<img
							className=' h-60 w-60 hover:scale-110 transition-all mx-auto rounded-2xl object-contain'
							src={touriga}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Travel Partner
					</h3>
				</div>
				<div>
					<a href='https://www.canvas.space'>
						<img
							className='h-60 w-60 hover:scale-110 transition-all mx-auto object-contain'
							src={canvas}
							alt=''
						/>
					</a>
					<h3 className='text-center text-lg p-4 font-anta font-bold'>
						Creative Technology Partner
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
