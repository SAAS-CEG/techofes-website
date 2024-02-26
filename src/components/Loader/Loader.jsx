import React from 'react';
import './Loader.css';

const Loader = () => {
	return (
		<div className="load h-screen">
			<div className="loading-container">
				<div className="loading-text">
					<span>L</span>
					<span>O</span>
					<span>A</span>
					<span>D</span>
					<span>I</span>
					<span>N</span>
					<span>G</span>
				</div>
			</div>
		</div>
	);
};

export default Loader;
