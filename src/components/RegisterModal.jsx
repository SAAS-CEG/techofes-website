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
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'background.paper',
	boxShadow: 24,
	paddingTop: 8,
	paddingBottom: 2,
	paddingLeft: 4,
	paddingRight: 4,
	borderRadius: 2,
	color: 'black',
	height: 500,
	overflowY: 'auto',
};

const RegistrationModal = ({ event }) => {
	const [open, setOpen] = React.useState(false);
	const [description, setDesciption] = React.useState();
	const [rules, setRules] = React.useState();

	const handleRegisterOpen = () => {
		setDesciption(event.description);
		setOpen(true);
	};

	const handleRulesOpen = () => {
		const ruleArray = event.rules.split('.');
		console.log(ruleArray);
		setRules(ruleArray);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setRules(null);
	};

	const handleRegister = (event) => {
		console.log(event);
	};

	return (
		<div className="w-[500px]">
			<div className="top-10 flex gap-x-5 justify-center items-center w-full">
				<Button size="small" className="px-4 w-full bg-blue-500 text-white" onClick={handleRulesOpen}>
					Rules
				</Button>
				<Button size="small" className="px-4 w-full bg-blue-500 text-white" onClick={handleRegisterOpen}>
					Register
				</Button>
			</div>
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
						<h1 style={{ fontSize: 40, marginBottom: 10 }} className="text-4xl mb-6">
							{event.eventName}
						</h1>
						<img src={event.image} className="h-72 w-[80%] mb-5" style={{ marginBottom: 20, width: 600, height: 280 }} />
						<p className="text-center" style={{ marginBottom: 10, textAlign: 'center' }}>
							{description}
						</p>
						{rules ? <h1 className="text-xl">Rules</h1> : null}
						{rules ? rules.map((rule) => <p key={rule}>{rule}</p>) : null}
						<div className="w-24 rounded-md hover:bg-blue-500 py-2 mt-4">
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
