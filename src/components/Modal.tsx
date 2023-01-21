import { ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
interface Props {
	children: ReactElement | ReactElement[] | string | number;
	actionBar: JSX.Element;
	onClose: () => void;
}

export const Modal = ({ onClose, actionBar, children }: Props) => {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	}, []);

	return ReactDOM.createPortal(
		<div>
			<div onClick={onClose} className='fixed inset-0 bg-gray-300 opacity-80'></div>
			<div className='fixed inset-40 p-10 bg-white'>
				<div className='flex flex-col justify-between h-full'>
					{children}
					<div className='flex justify-end'>{actionBar}</div>
				</div>
			</div>
		</div>,
		document.querySelector('.modal-container')!
	);
};

// {showModal && (
// 	<Modal onClose={handleClose} actionBar={actionBar}>
// 		<p>Here is an important agreement</p>
// 	</Modal>
// )}

// const actionBar = (
// 	<div onClick={handleClose}>
// 		<Button primary>I accept</Button>
// 	</div>
// );