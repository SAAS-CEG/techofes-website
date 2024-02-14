/* eslint-disable react/prop-types */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: 2,
};

const RegistrationModal = ({ event }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleRegister = (event) => {
		console.log(event);
	};

	return (
		<div className="w-[500px]">
			<Button size="small" className="w-full hover:text-white" onClick={handleOpen}>
				Register
			</Button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={open}>
					<Box sx={style} className="flex flex-col justify-center items-center">
						<h1 className="text-4xl mb-6">{event.eventName}</h1>
						<img src={event.image} className="h-72 w-[80%] mb-5" />
						<p className="w-full text-center">{event.description}</p>
						<div className="w-full hover:bg-blue-500 py-2 mt-4">
							<Button size="small" className="w-full hover:text-white" onClick={() => handleRegister(event)}>
								Register
							</Button>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default RegistrationModal;
