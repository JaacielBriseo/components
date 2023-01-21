import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { Panel } from './Panel';
type Props = {
	options: Option[];
	value: Option | null;
	onChange: (opt: Option) => void;
};
interface Option {
	label: string;
	value: string;
}

export const Dropdown = ({ options, value, onChange }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const divEl = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handler = (event: MouseEvent) => {
			if (!divEl.current) return;
			if (!(event.target instanceof Node) || !divEl.current?.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', handler, true);
		return () => document.removeEventListener('click', handler);
	}, []);

	const handleOptionClick = (option: Option) => {
		setIsOpen(currentIsOpen => !currentIsOpen);
		onChange(option);
	};
	return (
		<div ref={divEl} className='w-48 relative'>
			<Panel
				className='flex justify-between items-center cursor-pointer'
				onClick={() => setIsOpen(currentIsOpen => !currentIsOpen)}>
				{value?.label || 'Select...'}
				{isOpen ? <GoChevronUp className='text-lg' /> : <GoChevronDown className='text-lg' />}
			</Panel>
			{isOpen && (
				<Panel className='absolute top-full'>
					{options.map(option => (
						<div
							className='hover:bg-sky-100 rounded cursor-pointer p-1'
							key={option.value}
							onClick={() => handleOptionClick(option)}>
							{option.label}
						</div>
					))}
				</Panel>
			)}
		</div>
	);
};
