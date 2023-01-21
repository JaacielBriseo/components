import { Link } from './Link';

export const Sidebar = () => {
	const links = [
		{ label: 'Dropdown', path: '/' },
		{ label: 'Accordion', path: '/accordion' },
		{ label: 'Button', path: '/button' },
		{ label: 'Modal', path: '/modal' },
		{ label: 'Table', path: '/table' },
	];
	const renderedLinks = links.map(link => (
		<Link key={link.label} to={link.path} className='mb-3' activeClassName='font-bold border-l-4 border-blue-500 pl-2'>
			<h1>{link.label}</h1>
		</Link>
	));
	return <div className='sticky top-0 flex justify-between md:flex-col items-start'>{renderedLinks}</div>;
};
