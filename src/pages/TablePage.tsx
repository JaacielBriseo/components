import { SortableTable } from '../components/SortableTable';
import { Table } from '../components/Table';

export interface Fruit {
	name: string;
	color: string;
	score: number;
}

type RenderFn<T> = (data: T) => number | string | JSX.Element;
type SortValueFn<T> = (data: T) => number | string;

interface ColumnConfig<T> {
	label: string;
	render: RenderFn<T>;
	sortValue?: SortValueFn<T>;
}

export const TablePage = () => {
	const data: Fruit[] = [
		{ name: 'Orange', color: 'bg-orange-500', score: 5 },
		{ name: 'Apple', color: 'bg-red-500', score: 3 },
		{ name: 'Banana', color: 'bg-yellow-500', score: 1 },
		{ name: 'Lime', color: 'bg-green-500', score: 4 },
		{ name: 'Cherry', color: 'bg-red-700', score: 2.5 },
	];

	const config: ColumnConfig<Fruit>[] = [
		{ label: 'Name', render: (fruit: Fruit) => fruit.name, sortValue: (fruit: Fruit) => fruit.name },
		{
			label: 'Color',
			render: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
		},
		{
			label: 'Score',
			render: (fruit: Fruit) => fruit.score,
			sortValue: (fruit: Fruit) => fruit.score,
		},
		{
			label: 'Score Squared',
			render: (fruit: Fruit) => fruit.score ** 2,
			sortValue: (fruit: Fruit) => fruit.score ** 2,
		},
	];
	const keyFn = (fruit: Fruit) => {
		return fruit.name;
	};
	return (
		<div>
			<Table data={data} config={config} keyFn={keyFn} />
			<SortableTable data={data} config={config} keyFn={keyFn} />
		</div>
	);
};
