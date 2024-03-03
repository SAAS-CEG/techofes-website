import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div
			id='top'
			className='mt-auto p-4 flex w-full flex-col justify-center items-center gap-y-2 text-white font-courgette '
		>
			<ul className='social-icon flex gap-x-4 text-white'>
				<li className='hover:rotate-[360deg] hover:scale-110 transition duration-300'>
					<Link to='https://www.linkedin.com/company/saasceg/'>
						{' '}
						<LinkedInIcon />
					</Link>
				</li>
				<li className='hover:rotate-[360deg] hover:scale-110 transition duration-300'>
					<Link to='https://m.facebook.com/techofes.co.in'>
						{' '}
						<FacebookIcon />
					</Link>
				</li>
				<li className='hover:rotate-[360deg] hover:scale-110 transition duration-300'>
					<Link to='https://www.instagram.com/techofes_official?igsh=aWI4Z2h1ZHp3OXh4'>
						{' '}
						<InstagramIcon />
					</Link>
				</li>
			</ul>
			<ul className='menu flex gap-x-2 md:gap-x-4 text-xs md:text-lg'>
				<li className=' hover:font-bold'>
					<Link to='/events'>Events</Link>
				</li>
				<li className=' hover:font-bold'>
					<Link to='/accomodation'>Accomodation</Link>
				</li>
				<li className=' hover:font-bold'>
					<Link to='/merchandise'>Merchandise</Link>
				</li>
				<li className=' hover:font-bold'>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
			<div className='flex-col  text-xs md:text-lg'>
				<Link
					target='blank'
					to='https://saasceg.in/'
					className='items-center	justify-center'
				>
					©Copyright: SAAS 2024 of CEG, Anna University
				</Link>
			</div>
		</div>
	);
};

export default Footer;
