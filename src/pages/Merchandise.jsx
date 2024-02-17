import { BackgroundGradientDemo } from '../components/BackgroundGradient';
import { ThreeDCardDemo } from '../components/Card3d';

const Merchandise = () => {
	return (
		<div className="flex justify-around w-full px-10 mb-20">
			<div className="flex gap-x-10 justify-center items-center w-[50%]">
				<ThreeDCardDemo />
				<BackgroundGradientDemo />
			</div>

			<div className="ml-20 mt-16 w-[50%]">
				<h1 className="text-4xl tracking-wider font-bold mb-5">Techofes shirt</h1>
				<div className="mb-4">
					<h2 className="text-2xl mb-2">Product details</h2>
					<div className="w-[70%] flex justify-between">
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
					<button className="bg-green-600 px-2 py-1 rounded-lg">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Merchandise;
