import { useState, useEffect } from 'react';

export const useCounter = (initialCount: number) => {
	const [count, setCount] = useState(initialCount);
	useEffect(() => {
		console.log(count);
	}, [count]);

	const handleClick = () => {
		setCount(current => (current += 1));
	};
	return { count, handleClick };
};
