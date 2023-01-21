import className from 'classnames';
type Props = {
	children?: React.ReactNode;
	primary?: boolean;
	rounded?: boolean;
	inline?: boolean;
	danger?: boolean;
	outline?: boolean;
	secondary?: boolean;
	success?: boolean;
	warning?: boolean;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
	children,
	danger,
	outline,
	primary,
	rounded,
	secondary,
	success,
	warning,
	...rest
}) => {
	const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
		'border-blue-500 bg-blue-500 text-white': primary,
		'border-gray-900 bg-gray-900 text-white': secondary,
		'border-green-500 bg-green-500 text-white': success,
		'border-yellow-400 bg-yellow-400 text-white': warning,
		'border-red-500 bg-red-500 text-white': danger,
		'rounded-full': rounded,
		'bg-white': outline,
		'text-blue-500': outline && primary,
		'text-gray-900': outline && secondary,
		'text-green-500': outline && success,
		'text-yellow-400': outline && warning,
		'text-red-500': outline && danger,
	});
	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
};
