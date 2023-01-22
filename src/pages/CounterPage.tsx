import { Button } from '../components/Button';
import { useCounter } from '../hooks/useCounter';
interface Props {
	initialCount: number;
}
export const CounterPage = ({ initialCount }: Props) => {
	const { count, handleClick } = useCounter(initialCount);
	return (
		<div>
			<h1>Count is : {count}</h1>
			<Button primary outline rounded onClick={handleClick}>
				Increment
			</Button>
		</div>
	);
};
