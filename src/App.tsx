import { Route } from './components/Route';
import { Sidebar } from './components/Sidebar';
import { AccordionPage } from './pages/AccordionPage';
import { ButtonPage } from './pages/ButtonPage';
import { DropdownPage } from './pages/DropdownPage';
import { ModalPage } from './pages/ModalPage';
import { TablePage } from './pages/TablePage';

const App = () => {
	return (
		<div className='container mx-auto grid grid-rows-2 md:grid-cols-6 gap-4 mt-4 p-5'>
			<Sidebar />
			<div className='row-span-5 md:col-span-5'>
				<Route path='/accordion' children={<AccordionPage />} />
				<Route path='/' children={<DropdownPage />} />
				<Route path='/button' children={<ButtonPage />} />
				<Route path='/modal' children={<ModalPage />} />
				<Route path='/table' children={<TablePage />} />
			</div>
		</div>
	);
};

export default App;
