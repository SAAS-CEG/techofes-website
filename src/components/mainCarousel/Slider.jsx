import { useEffect } from 'react';
import './Maincaro.css';

const Slider = () => {
	// const [items, setItems] = useState([
	// 	{
	// 		id: 1,
	// 		imageUrl: `url(${img3})`,
	// 		title: 'Lossless Youths',
	// 		description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
	// 	},
	// 	{
	// 		id: 2,
	// 		imageUrl: `url(${img4})`,
	// 		title: 'Lossless Youths',
	// 		description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
	// 	},
	// 	{
	// 		id: 3,
	// 		imageUrl: `url(${img5})`,
	// 		title: 'Lossless Youths',
	// 		description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
	// 	},
	// 	{
	// 		id: 4,
	// 		imageUrl: `url(${img6})`,
	// 		title: 'Lossless Youths',
	// 		description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
	// 	},
	// 	{
	// 		id: 5,
	// 		imageUrl: `url(${img7})`,
	// 		title: 'Lossless Youths',
	// 		description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
	// 	},
	// ]);

	// const sliderRef = useRef(null);

	// const activateNext = (e) => {
	// 	sliderRef.current.prepend();
	// 	console.log('.next');
	// };

	// const activatePrev = (e) => {
	// 	sliderRef.current.append();
	// 	console.log('.prev');
	// };
	useEffect(() => {
		const slider = document.querySelector('.slider');

		function activate(e) {
			const items = document.querySelectorAll('.item');
			e.target.matches('.next') && slider.append(items[0]);
			e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
		}

		document.addEventListener('click', activate, false);
	});

	return (
		// <div classNameName="main">
		//   <ul classNameName="Slider" ref={sliderRef}>
		//     {items.map((item, index) => (
		//       <li
		//         key={index}
		//         classNameName="item"
		//         style={{ backgroundImage: item.imageUrl }}
		//       >
		//         <div classNameName="content">
		//           <h2 classNameName="title">{item.title}</h2>
		//           <p classNameName="description">{item.description}</p>
		//           <button>Read More</button>
		//         </div>
		//       </li>
		//     ))}
		//   </ul>
		//   <nav classNameName="nav">
		//     <button onClick={activateNext} classNameName="prev">
		//       <ArrowBackIosNewIcon />
		//     </button>
		//     <button onClick={activatePrev} classNameName="next">
		//       <ArrowForwardIosIcon />
		//     </button>
		//   </nav>
		// </div>
		<main>
			<ul className="slider">
				<li className="item" style={{ backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')` }}>
					<div className="content">
						<h2 className="title">"Lossless Youths"</h2>
						<p className="description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. </p>
						<button>Read More</button>
					</div>
				</li>
				<li className="item" style={{ backgroundImage: `url('https://i.redd.it/tc0aqpv92pn21.jpg')` }}>
					<div className="content">
						<h2 className="title">"Estrange Bond"</h2>
						<p className="description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. </p>
						<button>Read More</button>
					</div>
				</li>
				<li className="item" style={{ backgroundImage: `url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')` }}>
					<div className="content">
						<h2 className="title">"The Gate Keeper"</h2>
						<p className="description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. </p>
						<button>Read More</button>
					</div>
				</li>
				<li className="item" style={{ backgroundImage: `url('https://images7.alphacoders.com/878/878663.jpg')` }}>
					<div className="content">
						<h2 className="title">"Last Trace Of Us"</h2>
						<p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
						<button>Read More</button>
					</div>
				</li>
				<li className="item" style={{ backgroundImage: `url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')` }}>
					<div className="content">
						<h2 className="title">"Urban Decay"</h2>
						<p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.</p>
						<button>Read More</button>
					</div>
				</li>
				<li className="item" style={{ backgroundImage: `url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')` }}>
					<div className="content">
						<h2 className="title">"The Migration"</h2>
						<p className="description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. </p>
						<button>Read More</button>
					</div>
				</li>
			</ul>
			<nav className="nav top-44">
				<ion-icon className="btn prev" name="arrow-back-outline"></ion-icon>
				<ion-icon className="btn next" name="arrow-forward-outline"></ion-icon>
			</nav>
		</main>
	);
};
export default Slider;
