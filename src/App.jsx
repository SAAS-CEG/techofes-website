import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Sponsors from './pages/Sponsors';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
<<<<<<<<< Temporary merge branch 1
=========
// import Header from './components/Header';
>>>>>>>>> Temporary merge branch 2

const App = () => {
	return (
		<BrowserRouter>
<<<<<<<<< Temporary merge branch 1
=========
			{/* <Header /> */}
>>>>>>>>> Temporary merge branch 2
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/sponsors" element={<Sponsors />} />
				<Route path="/workshops" element={<Workshops />} />
				<Route path="/contact" element={<Contact />} />
<<<<<<<<< Temporary merge branch 1
				<Route path="/events/:id" element={<Registration />} />
=========
				<Route path="/register" element={<Registration />} />
>>>>>>>>> Temporary merge branch 2
			</Routes>
		</BrowserRouter>
	);
};

export default App;
