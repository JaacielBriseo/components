import { ReactElement } from 'react';
import classNames from 'classnames';
import useNavigation from '../hooks/useNavigation';

interface Props {
	to: string;
	children: ReactElement | ReactElement[];
	className?: string;
	activeClassName?: string;
}
export const Link = ({ to, children, className, activeClassName }: Props) => {
	const { navigate, currentPath } = useNavigation();
	const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);
	const handleClick = (event: React.MouseEvent) => {
		if (event.ctrlKey || event.metaKey) return;
		event.preventDefault();

		navigate(to);
	};
	return (
		<a className={classes} href={to} onClick={handleClick}>
			{children}
		</a>
	);
};
