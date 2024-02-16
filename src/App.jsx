import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Sponsors from './pages/Sponsors';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
<<<<<<< HEAD
=======
// import Header from './components/Header';
>>>>>>> 58b91fc5b02cf4ca5391208dfe3e21ff3536013c

const App = () => {
	return (
		<BrowserRouter>
<<<<<<< HEAD
=======
			{/* <Header /> */}
>>>>>>> 58b91fc5b02cf4ca5391208dfe3e21ff3536013c
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/sponsors" element={<Sponsors />} />
				<Route path="/workshops" element={<Workshops />} />
				<Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
				<Route path="/events/:id" element={<Registration />} />
=======
				<Route path="/register" element={<Registration />} />
>>>>>>> 58b91fc5b02cf4ca5391208dfe3e21ff3536013c
			</Routes>
		</BrowserRouter>
	);
};

export default App;
