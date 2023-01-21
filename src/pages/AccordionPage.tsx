import { Accordion } from "../components/Accordion";


interface Items {
	id:string
	label: string;
	content: string;
}
export const AccordionPage = () => {
	const items:Items[] = [
		{
			id:'234kg',
			label: 'Can I use React on a Project',
			content:
				'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.',
		},
		{
			id:'tgk3j4',
			label: 'Can I use Vue on a Project',
			content:
				'You can use Vue on any project you want.You can use Vue on any project you want.You can use Vue on any project you want.',
		},
		{
			id:'92nfns',
			label: 'Can I use Angular on a Project',
			content:
				'You can use Angular on any project you want.You can use Angular on any project you want.You can use Angular on any project you want.',
		},
	];
	return (
		<>
			<Accordion items={items} />
		</>
	);
};

