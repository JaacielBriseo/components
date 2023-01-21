import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

interface Props {
	items: { label: string; content: string; id: string }[];
}
export const Accordion = ({ items }: Props) => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
	const handleClick = (index: number) => {
		setExpandedIndex(current => {
			if (current === index) {
				return null;
			} else {
				return index;
			}
		});
	};
	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;
		return (
			<div key={item.id}>
				<div
					onClick={() => handleClick(index)}
					className='cursor-pointer flex justify-between p-3 bg-gray-50 border-b items-center'>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className='border-b p-5'>{item.content}</div>}
			</div>
		);
	});
	return <div className='border-x border-t rounded'>{renderedItems}</div>;
};
