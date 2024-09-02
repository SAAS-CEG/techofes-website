import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function HeaderButton({ children, onClick }) {
	const [hover, setHover] = useState(false);

	return (
		<div
			onClick={onClick}
			className='py-3 px-8 white text-2xl hover:scale-105 transition ease-in-out duration-150'
			style={{
				textShadow: hover ? '0 0 30px orange' : '0 0 20px orange',
			}}
			//hover function
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{children}
		</div>
	);
}

export default HeaderButton;
