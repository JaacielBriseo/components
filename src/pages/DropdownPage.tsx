import { useState } from 'react';
import { Dropdown } from '../components/Dropdown';
interface Option {
	label: string;
	value: string;
}
export const DropdownPage = () => {
	const [selection, setSelection] = useState<Option | null>(null);
 
	const handleSelect = (option: Option) => {
		setSelection(option);
	};
	const options = [
		{
			label: 'Red',
			value: 'red',
		},
		{
			label: 'Green',
			value: 'green',
		},
		{
			label: 'Blue',
			value: 'blue',
		},
	];
	return (
		<div className='md:flex'>
			<Dropdown options={options} value={selection} onChange={handleSelect} />
			<Dropdown options={options} value={selection} onChange={handleSelect} />
		</div>
	);
};
