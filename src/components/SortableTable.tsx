import { Fruit } from '../pages/TablePage';
import { Table } from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import { useSort } from '../hooks/useSort';

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
	const { setSortColumn, sortBy, sortOrder, sortedData } = useSort({ data, config });

	const updatedConfig = config.map(column => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label)} key={column.label}>
					<div className='flex items-center'>
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	return <Table {...props} data={sortedData} config={updatedConfig} />;
};
interface GetIconsProps {
	label: string;
	sortBy: string | null;
	sortOrder: 'asc' | 'desc' | null;
}

function getIcons(
	label: GetIconsProps['label'],
	sortBy: GetIconsProps['sortBy'],
	sortOrder: GetIconsProps['sortOrder']
) {
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
