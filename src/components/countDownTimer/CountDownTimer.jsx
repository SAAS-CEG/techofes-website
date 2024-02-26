/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import moment from 'moment';
import './CountDownTimer.css';

const CountdownTimer = ({ timeTillDate, timeFormat }) => {
	const [countdownValues, setCountdownValues] = useState({
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const then = moment(timeTillDate, timeFormat);
			const now = moment();
			const countdown = moment(then - now);
			const days = countdown.format('D');
			const hours = countdown.format('HH');
			const minutes = countdown.format('mm');
			const seconds = countdown.format('ss');

			setCountdownValues({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const { days, hours, minutes, seconds } = countdownValues;

	return (
		<div className="countdown-container mt-4">
			<h1 className="text-4xl text-white mb-4">Days to go</h1>
			<div className="countdown-wrapper">
				{days && (
					<div className="countdown-item border rounded-full">
						{days}
						<span>days</span>
					</div>
				)}
				{hours && (
					<div className="countdown-item border rounded-full">
						{hours}
						<span>hours</span>
					</div>
				)}
				{minutes && (
					<div className="countdown-item border rounded-full">
						{minutes}
						<span>minutes</span>
					</div>
				)}
				{seconds && (
					<div className="countdown-item border rounded-full">
						{seconds}
						<span>seconds</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default CountdownTimer;
