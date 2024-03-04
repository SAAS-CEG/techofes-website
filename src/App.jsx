import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Workshops from "./pages/Workshops";
import Sponsors from "./pages/Sponsors";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import Header from "./components/header/Header";
import Merchandise from "./pages/Merchandise";
import Footer from "./components/footer/Footer";
import Accomodation from "./pages/Accomodation";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Sign_in_new from "./pages/Sign_in_new";
import Sign_in from "./pages/Sign_in";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/signup" element={<Sign_in />} />
            <Route path="/signin" element={<Sign_in_new />} />
            {/* 
        <Route path="/workshops" element={<Workshops />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/accomodation" element={<Accomodation />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
