import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Sponsors from './pages/Sponsors';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Registration from './pages/Registration';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/sponsors" element={<Sponsors />} />
				<Route path="/workshops" element={<Workshops />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/events/:id" element={<Registration />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
