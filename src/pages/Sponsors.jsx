import sponser_1 from '../assets/sponsers/sponser_1.jpg';
import sponser_2 from '../assets/sponsers/sponser_2.jpg';
import sponser_3 from '../assets/sponsers/sponser_3.jpg';
import sponser_4 from '../assets/sponsers/sponser_4.jpg';
import sponser_5 from '../assets/sponsers/sponser_5.jpg';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import snowParticleConfig from '../particles/snowParticleConfig';

const Sponsors = () => {
	const imgs = [sponser_1, sponser_2, sponser_3];

	async function loadParticles(main) {
		await loadSlim(main);
	}

	return (
		<div className="h-screen">
			<Particles id="tsparticles" init={loadParticles} options={snowParticleConfig} />
			<div className="h-full pb-11 mt-20 cursor-default">
				<div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
					<h1>OUR SPONSERS</h1>
				</div>

				<div className="flex justify-center">
					{/* <div className="flex w-4/5 p-5 md:p-10 rounded-xl mb-20"> */}
					{/* {imgs.map((el, index) => {
							return (
								<div key={index} className="w-full md:w-1/2 my-2 sm:px-2 mx-3 lg:w-1/3 hover:scale-105 transition duration-300 ease-in-out">
									<div className="rounded-xl shadow-lg bg-cover text-white">
										<div className="h-52 w-full object-contain rounded-t-lg bg-cover bg-center" style={{ backgroundImage: `url(${el})` }}></div>
										<div className="p-4 min-h-20">
											<h5 className="mb-2 mt-2 text-xl text-center font-semibold font-unbounded tracking-tight">Sponser Name</h5>
											<p className="h-14 text-center font-normal overflow-hidden">Some description abt the sponser. Abt the org. and links to their page.</p>
										</div>
									</div>
								</div>
							);
						})} */}
					{/* </div> */}
					<div className="flex justify-center items-center">
						<h1 className="text">Coming soon...</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
