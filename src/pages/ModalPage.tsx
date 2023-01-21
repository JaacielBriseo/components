import { useState } from 'react';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

export const ModalPage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(current => !current);
	};

	const handleClose = () => {
		setShowModal(false);
	};
	const actionBar = (
		<div onClick={handleClose}>
			<Button primary>I accept</Button>
		</div>
	);
	return (
		<div className='relative'>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && (
				<Modal onClose={handleClose} actionBar={actionBar}>
					<p>Here is an important agreement</p>
				</Modal>
			)}
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, dolore dignissimos a maxime fuga facere eum expedita distinctio quisquam minima itaque eos mollitia enim. Animi libero atque quas? Dicta, tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus delectus fugit nam sunt praesentium quia voluptatum quis incidunt aperiam fuga eaque nulla tenetur laboriosam, harum rerum, corporis soluta ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit impedit repudiandae cupiditate quibusdam facilis iusto sed. Qui odio voluptatem unde velit et aut nesciunt quidem architecto totam? Voluptatem, assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, eveniet tempora suscipit error beatae unde repellat voluptates explicabo assumenda eum voluptatum iusto mollitia perspiciatis culpa labore maiores, sint accusantium cumque.</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, dolore dignissimos a maxime fuga facere eum expedita distinctio quisquam minima itaque eos mollitia enim. Animi libero atque quas? Dicta, tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus delectus fugit nam sunt praesentium quia voluptatum quis incidunt aperiam fuga eaque nulla tenetur laboriosam, harum rerum, corporis soluta ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit impedit repudiandae cupiditate quibusdam facilis iusto sed. Qui odio voluptatem unde velit et aut nesciunt quidem architecto totam? Voluptatem, assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, eveniet tempora suscipit error beatae unde repellat voluptates explicabo assumenda eum voluptatum iusto mollitia perspiciatis culpa labore maiores, sint accusantium cumque.</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, dolore dignissimos a maxime fuga facere eum expedita distinctio quisquam minima itaque eos mollitia enim. Animi libero atque quas? Dicta, tempore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus delectus fugit nam sunt praesentium quia voluptatum quis incidunt aperiam fuga eaque nulla tenetur laboriosam, harum rerum, corporis soluta ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit impedit repudiandae cupiditate quibusdam facilis iusto sed. Qui odio voluptatem unde velit et aut nesciunt quidem architecto totam? Voluptatem, assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, eveniet tempora suscipit error beatae unde repellat voluptates explicabo assumenda eum voluptatum iusto mollitia perspiciatis culpa labore maiores, sint accusantium cumque.</p>
		</div>
	);
};
