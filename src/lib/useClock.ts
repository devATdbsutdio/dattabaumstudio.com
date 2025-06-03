import * as React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

const getCurrentTime = () => {
	const now = dayjs();
	const currentTime = now.format('HH:mm z');
	return currentTime;
};

export default function useClock() {
	const [time, setTime] = React.useState(() => getCurrentTime());

	React.useEffect(() => {
		function tick() {
			setTime(getCurrentTime());
		}
		let id = setInterval(tick, 60000);
		return () => clearInterval(id);
	}, []);

	return time;
}
