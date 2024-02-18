import "./Merchandise.css";
import { ThreeDCardDemo } from "../components/Card3d";

const Merchandise = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center p-8 pt-10 pb-5 text-5xl text-white font-anta">
        <h1>GET YOUR T-SHIRT</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full min-h-[500px] px-10 mb-20 bg-zinc-900 text-white md:mt-5 pb-8">
        <div className="flex gap-x-10 justify-center items-center w-2/3 md:w-[50%]">
          <ThreeDCardDemo />
        </div>

        <div className="md:ml-20 mt-16 md:mt-0 w-full md:w-[50%]">
          <h1 className="text-2xl md:text-4xl tracking-wider font-bold font-anta mb-5">
            Techofes shirt
          </h1>
          <div className="mb-4">
            <h2 className="text-lg md:text-2xl mb-2">Product details</h2>
            <div className="w-[70%] flex justify-between text-sm md:text-base">
              <h3>Fabric Type</h3>
              <p>Solid:100%, Cotton:100%, Sweat Free</p>
            </div>
            <div className="w-[70%] flex justify-between">
              <h3>Fabric Type</h3>
              <p>Solid:100%, Cotton:100%, Sweat Free</p>
            </div>
          </div>
          {/* size chart */}
          <div className="flex gap-x-3 mb-4">
            <button className="bg-gray-700 px-2 py-1 rounded-md text-xs active:bg-slate-50">
              <p>S</p>
              <p>32</p>
            </button>
            <button className="bg-gray-700 px-2 py-1 rounded-md text-xs">
              <p>M</p>
              <p>32</p>
            </button>
            <button className="bg-gray-700 px-2 py-1 rounded-md text-xs">
              <p>L</p>
              <p>32</p>
            </button>
            <button className="bg-gray-700 px-2 py-1 rounded-md text-xs">
              <p>XL</p>
              <p>32</p>
            </button>
          </div>

          {/* amount */}
          <div className="flex items-center gap-4">
            <p className="text-xl">Price: Rs 300</p>
          </div>
          <button className="bg-green-600 rounded-lg button p-4 mt-5 text-base md:text-lg hover:scale-110 transition duration-100 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
