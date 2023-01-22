import { Button } from '../components/Button';
import { useReducer } from 'react';
import { Panel } from '../components/Panel';
interface Props {
	initialCount: number;
}
interface State {
	count: number;
	valueToAdd: number;
}

type Action =
	| { type: 'increment' }
	| { type: 'decrement' }
	| { type: 'submit'; value: number }
	| { type: 'change'; value: number };

const counterReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + 1 };
		case 'decrement':
			return { ...state, count: state.count - 1 };
		case 'submit':
			return { ...state, count: state.count + action.value, valueToAdd: 0 };
		case 'change':
			return { ...state, valueToAdd: action.value };
		default:
			return state;
	}
};
export const CounterPage = ({ initialCount }: Props) => {
	const [state, dispatch] = useReducer(counterReducer, { count: initialCount, valueToAdd: 0 });
	const { count, valueToAdd } = state;

	const increment = () => {
		dispatch({ type: 'increment' });
	};
	const decrement = () => {
		dispatch({ type: 'decrement' });
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(event.target.value);
		dispatch({ type: 'change', value });
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch({ type: 'submit', value: valueToAdd });
	};
	return (
		<Panel className='m-3'>
			<h1 className='text-lg'>Count is : {count}</h1>
			<div className='flex'>
				<Button primary outline rounded onClick={increment}>
					Increment
				</Button>
				<Button secondary outline rounded onClick={decrement}>
					Increment
				</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					value={valueToAdd || ''}
					onChange={handleChange}
					type='number'
					className='p-1 m-3 bg-gray-50 border border-gray-300'
				/>
				<Button>Add it!</Button>
			</form>
		</Panel>
	);
};
