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
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

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
            {/* 
        <Route path="/workshops" element={<Workshops />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/accomodation" element={<Accomodation />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
