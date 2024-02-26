import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import snowParticleConfig from '../particles/snowParticleConfig';
import { TextField } from '@mui/material';
import './Contact.css';

const Contact = () => {
	async function loadParticles(main) {
		await loadSlim(main);
	}

	return (
		<div className="mt-20 cursor-default  border border-neutral-600 rounded-lg shadow-lg shadow-gray-200 m-40">
			<Particles id="tsparticles" init={loadParticles} options={snowParticleConfig} />
			<div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
				<h1>CONTACT US</h1>
			</div>

			<div className="flex flex-col justify-center items-center text-white px-10 pb-24">
				<div className="bk flex justify-center items-center w-full gap-x-4 md:w-4/5 rounded-2xl p-2 md:p-4 shadow-2xl relative border border-neutral-600">
					<div className="flex h-full px-10 gap-y-10 py-5 flex-col">
						<TextField
							id="standard-basic"
							label="Name"
							variant="standard"
							sx={{
								input: {
									color: 'white',
								},
								'& label': {
									color: 'white',
								},
								'& .MuiInput-underline': {
									'&:before': {
										borderBottomColor: 'white', // white underline color
									},
									'&:after': {
										borderBottomColor: 'white', // white underline color after focus
									},
								},
								'& label.Mui-focused': {
									color: 'white',
								},
								'& .MuiInput-underline:after': {
									borderBottomColor: 'white',
								},
								'& .MuiInput-underline:hover:before': {
									borderBottomColor: 'white', // white underline color on hover
								},
								'& .MuiOutlinedInput-root': {
									'& fieldset': {
										borderColor: 'white',
									},
									'&:hover fieldset': {
										borderColor: 'white',
									},
									'&.Mui-focused fieldset': {
										borderColor: 'white',
									},
								},
							}}
						/>
						<TextField
							id="standard-basic"
							label="Email"
							variant="standard"
							sx={{
								input: {
									color: 'white',
								},
								'& label': {
									color: 'white',
								},
								'& .MuiInput-underline': {
									'&:before': {
										borderBottomColor: 'white', // white underline color
									},
									'&:after': {
										borderBottomColor: 'white', // white underline color after focus
									},
								},
								'& label.Mui-focused': {
									color: 'white',
								},
								'& .MuiInput-underline:after': {
									borderBottomColor: 'white',
								},
								'& .MuiInput-underline:hover:before': {
									borderBottomColor: 'white', // white underline color on hover
								},
								'& .MuiOutlinedInput-root': {
									'& fieldset': {
										borderColor: 'white',
									},
									'&:hover fieldset': {
										borderColor: 'white',
									},
									'&.Mui-focused fieldset': {
										borderColor: 'white',
									},
								},
							}}
						/>
						<TextField
							id="standard-basic"
							label="Message"
							variant="standard"
							sx={{
								input: {
									color: 'white',
								},
								'& label': {
									color: 'white',
								},
								'& .MuiInput-underline': {
									'&:before': {
										borderBottomColor: 'white', // white underline color
									},
									'&:after': {
										borderBottomColor: 'white', // white underline color after focus
									},
								},
								'& label.Mui-focused': {
									color: 'white',
								},
								'& .MuiInput-underline:after': {
									borderBottomColor: 'white',
								},
								'& .MuiInput-underline:hover:before': {
									borderBottomColor: 'white', // white underline color on hover
								},
								'& .MuiOutlinedInput-root': {
									'& fieldset': {
										borderColor: 'white',
									},
									'&:hover fieldset': {
										borderColor: 'white',
									},
									'&.Mui-focused fieldset': {
										borderColor: 'white',
									},
								},
							}}
						/>
					</div>
					<div className="flex flex-wrap flex-col w-max">
						<div className="w-full p-3">
							<div className="flex-auto w-full p-4 rounded-2xl">
								<h1 className="text-xl m-2 font-unbounded">For Sponsorship :</h1>
								<p className="text-sm md:text-base px-4 py-1">Manisha : 6302831408</p>
								<p className="text-sm md:text-base px-4 py-1">Vijay : 8608556824</p>
								<p className="text-sm md:text-base px-4 py-1"> email : corporaterelations@saasceg.com</p>
							</div>
						</div>
						<div className="w-full p-3">
							<div className="flex-auto w-full p-4 rounded-2xl">
								<h1 className="text-xl m-2 font-unbounded">For General Queries :</h1>
								<p className="text-sm md:text-base px-4 py-1">Jayaharish : 9597942324</p>
								<p className="text-sm md:text-base px-4 py-1">Sivanitha : 8825702662</p>
								<p className="text-sm md:text-base px-4 py-1">email : saas.ceg.official@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center py-5 w-4/5 p-3">
					<div className="w-full h-60 rounded-xl overflow-hidden relative">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3878496259977!2d80.23277747515768!3d13.010955587308075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679fd80e657f%3A0x9727dde0ba49c84e!2sAnna%20University!5e0!3m2!1sen!2sin!4v1707907549033!5m2!1sen!2sin"
							width="100%"
							height="100%"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
