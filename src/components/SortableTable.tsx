import { Fruit } from '../pages/TablePage';
import { Table } from './Table';
import { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

interface Props {
	data: Fruit[];
	config: {
		label: string;
		render: (x: Fruit) => number | string | JSX.Element;
		sortValue?: (fruit: Fruit) => number | string;
	}[];
	keyFn: (fruit: Fruit) => string;
}

export const SortableTable = (props: Props) => {
	const { config, data } = props;
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
	const [sortBy, setSortBy] = useState<string | null>(null);

	const handleClick = (label: string) => {
		if (sortBy && label !== sortBy) {
			setSortOrder('asc');
			setSortBy(label);
			return;
		}

		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
		setSortBy(label);
	};

	const updatedConfig = config.map(column => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label)} key={column.label}>
					<div className='flex items-center'>
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	let sortedData = data;
	if (sortOrder && sortBy) {
		const { sortValue } = config.find(column => column.label === sortBy)!;
		sortedData = [...data].sort((a, b) => {
			const valueA = sortValue!(a);
			const valueB = sortValue!(b);

			const reverseOrder = sortOrder === 'asc' ? 1 : -1;
			if (typeof valueA === 'string') {
				return valueA.localeCompare(typeof valueB === 'string' ? valueB : '') * reverseOrder;
			} else {
				return (valueA - (typeof valueB === 'number' ? valueB : 1)) * reverseOrder;
			}
		});
	}
	return <Table {...props} data={sortedData} config={updatedConfig} />;
};

function getIcons(label: string, sortBy: string | null, sortOrder: 'asc' | 'desc' | null) {
	const isSortedBy = label === sortBy;
	let arrow;
	switch (sortOrder) {
		case 'asc':
			arrow = <GoArrowSmallUp />;
			break;
		case 'desc':
			arrow = <GoArrowSmallDown />;
			break;
		default:
			arrow = (
				<>
					<GoArrowSmallDown />
					<GoArrowSmallUp />
				</>
			);
			break;
	}
	return (
		<div>
			{isSortedBy ? (
				arrow
			) : (
				<>
					<GoArrowSmallDown />
					<GoArrowSmallUp />
				</>
			)}
		</div>
	);
}
