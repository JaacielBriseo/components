import { useState } from 'react';
import { Fruit } from '../pages/TablePage';

type Args = {
	data: Fruit[];
	config: {
		label: string;
		render: (x: Fruit) => number | string | JSX.Element;
		sortValue?: ((fruit: Fruit) => number | string) | undefined;
	}[];
};

export const useSort = <T extends Args>(args: T) => {
	const { config, data } = args;
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
	const [sortBy, setSortBy] = useState<string | null>(null);

	const setSortColumn = (label: string) => {
		if (sortBy && label !== sortBy) {
			setSortOrder('asc');
			setSortBy(label);
			return;
		}

		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
		setSortBy(label);
	};

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
	return {
		sortBy,
		sortOrder,
		sortedData,
		setSortColumn,
	};
};
