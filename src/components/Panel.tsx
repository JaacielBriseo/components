import classNames from 'classnames';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
	[x: string]: any;
}
export const Panel = ({ children, className, ...rest }: Props) => {
	const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);
	return (
		<div {...rest} className={finalClassNames}>
			{children}
		</div>
	);
};
