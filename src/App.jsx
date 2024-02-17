import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Sponsors from './pages/Sponsors';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Registration from './pages/Registration';

import Header from './components/Header';
import Merchandise from './pages/Merchandise';

const App = () => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/sponsors" element={<Sponsors />} />
				<Route path="/workshops" element={<Workshops />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/merchandise" element={<Merchandise />} />
				<Route path="/register" element={<Registration />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
