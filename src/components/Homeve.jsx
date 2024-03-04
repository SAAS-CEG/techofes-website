import { eventRegistrationDetails } from '../constants/constants';
import FlipCard from './FlipCard';

const Homeve = () => {
	return (
		<div className='md:pt-5 pb-20 md:pb-0 h-full'>
			<div className='flex justify-center items-center text-6xl py-10'>
				<h1
					className='font-anta text-white text-3xl md:text-6xl mt-20'
				>
					Events
				</h1>
			</div>
			<div className='flex justify-center'>
				<div className='flex md:flex-row flex-col flex-wrap w-full h-full justify-evenly items-center gap-20'>
					{eventRegistrationDetails.map((event) => {
						return (
							<FlipCard
								event={event}
								key={event.id}
							/>
						);
					})}
					<Link to="/events" className='text-white'>View more ...</Link>
				</div>
			</div>
		</div>
	);
};

export default Homeve;
