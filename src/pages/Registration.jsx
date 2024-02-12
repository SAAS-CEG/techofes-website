import { TextField } from '@mui/material';
import Header from '../components/Header';

const Registration = () => {
	return (
		<>
			<Header />
			<div className="flex flex-col justify-center items-center my-10">
				<h1 className="text-2xl my-5">Event 1</h1>

				<p className="mb-10 mx-5 font-light text-gray-600">awldnawl dawld lawdlka wld alw dl awld aw ldawl dla wlkd alw dlaw ld awlflnalfnsenlfknlesk flse lf slek s</p>

				<form method="post" action="#" className="flex flex-col gap-y-5">
					<TextField id="outlined-basic" label="Name" variant="outlined" className="w-80" />
					<TextField id="outlined-basic" label="Phone number" variant="outlined" className="w-80" />
					<TextField id="outlined-basic" label="College name" variant="outlined" className="w-80" />
				</form>
			</div>
		</>
	);
};

export default Registration;
