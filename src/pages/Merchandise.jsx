import "./Merchandise.css";
import ThreeDCardDemo from "../components/Card3d.jsx";
import ajith from "../assets/Ajith.png";
import vijay from "../assets/Vijay.png";
import back from "../assets/Backside.png";
const Merchandise = () => {
  return (
    <div className="mt-20 bg-g pb-8 min-h-[85vh]">
      <div className="flex items-center justify-center p-8 pt-10 pb-5  text-white font-anta">
        <h1 className="text-3xl md:text-5xl font-anta">GET YOUR T-SHIRT</h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 items-center w-[90%] mx-auto min-h-[500px] px-10 mb-20 bk text-white md:mt-5 py-10">
        <ThreeDCardDemo img={vijay} />
        <ThreeDCardDemo img={back} />
        <ThreeDCardDemo img={ajith} />
        <div className="sm:mt-20 mt-10 flex flex-wrap sm:w-full  justify-evenly sm:justify-center sm:gap-8 gap-6">
          <button
            className="bg-gray-800 sm:px-8 px-4 py-2 sm:py-4 text-lg sm:text-2xl rounded-2xl cursor-not-allowed text-slate-500"
            disabled
          >
            Buy now
          </button>
          <p className="sm:px-8 px-4 py-2 sm:py-4 text-lg  sm:text-2xl bg-green-600 rounded-2xl">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
