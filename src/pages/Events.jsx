import Header from '../components/Header';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { eventRegistrationDetails } from '../constants/constants';
// import { useNavigate } from 'react-router-dom';
import RegistrationModal from '../components/RegisterModal';
// import { useState } from 'react';
// import { useState } from 'react';

const Events = () => {
	// const [open, setOpen] = useState(false);
	// const [event, setEvent] = useState();
	// const handleRegister = (e) => {
	// 	setOpen(true);
	// 	setEvent({
	// 		id: e.target.id,
	// 	});
	// };
	return (
		<div className="w-full">
			<Header />
			<div className="w-full flex justify-center my-20 items-center">
				<div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-14 gap-y-20">
					{eventRegistrationDetails.map((event) => {
						return (
							<Card sx={{ maxWidth: 345 }} key={event.id}>
								<CardMedia component="img" alt="green iguana" className="w-full h-60" image={event.image} />
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{event.eventName}
									</Typography>
									<Typography color="text.secondary">{event.description}</Typography>
								</CardContent>
								<CardActions className="w-full flex justify-center hover:bg-blue-600 hover:cursor-pointer">
									<RegistrationModal event={event} />
								</CardActions>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Events;
