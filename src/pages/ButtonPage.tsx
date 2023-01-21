
import { GoBell } from 'react-icons/go';
import { Button } from '../components/Button';

export const ButtonPage = () => {
	return (
		<>
			<div>
				<Button primary rounded outline>
					<GoBell />
					Click me!
				</Button>
			</div>
		</>
	);
};