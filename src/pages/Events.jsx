<<<<<<< HEAD
import Header from "../components/Header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { eventRegistrationDetails } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Events = () => {
  const navigate = useNavigate();

  const registerEvent = (e) => {
    const eventId = e.target.id;
    navigate(`/events/${eventId}`);
  };
  return (
    <div className="w-full">
      <Header />
      <div className="w-full flex justify-center my-20 items-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-14 gap-y-20">
          {eventRegistrationDetails.map((event) => {
            return (
              <div>
                <Card sx={{ maxWidth: 345 }} key={event.id}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    className="w-20 h-60"
                    image={event.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.eventName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="w-full flex justify-center hover:bg-blue-600 hover:cursor-pointer">
                    <Button
                      id={event.id}
                      size="small"
                      className="w-full hover:text-white"
                      onClick={(e) => registerEvent(e)}
                    >
                      Register
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
=======
import Header from '../components/Header';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { eventRegistrationDetails } from '../constants/constants';
import RegistrationModal from '../components/RegisterModal';
import FlipCard from '../components/FlipCard';

const Events = () => {
	return (
		<div className="w-full">
			<Header />
			<div className="w-full flex justify-center my-20 items-center">
				<div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-14 gap-y-20">
					{/* {eventRegistrationDetails.map((event) => {
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
					})} */}
					<FlipCard />
				</div>
			</div>
		</div>
	);
>>>>>>> 58b91fc5b02cf4ca5391208dfe3e21ff3536013c
};

export default Events;
