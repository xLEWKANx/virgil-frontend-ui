import * as React from 'react';
import * as cn from 'classnames/bind';
import ButtonContent, { IButtonContent } from './ButtonContent';

const styles = require('./Button.css');
const classNames = cn.bind(styles);

export enum ButtonTheme {
	Primary = styles.Primary,
	Secondary = styles.Secondary,
	Inline = styles.Inline,
	Outline = styles.Outline,
	SmallOutlineRed = styles.SmallOutlineRed,
	SmallOutlineWhite = styles.SmallOutlineWhite,
}

export interface IButtonProps extends React.ButtonHTMLAttributes<{}>, IButtonContent {}

export default class Button extends React.Component<IButtonProps> {
	static ButtonTheme = ButtonTheme;

	render() {
		const {
			className,
			icon,
			children,
			theme = ButtonTheme.Primary,
			disabled = false,
			loading,
			...props
		} = this.props;

		const wrapperClass = classNames(className, theme);

		return (
			<button {...props} disabled={disabled} className={wrapperClass}>
				<ButtonContent icon={icon} loading={loading}>
					{children}
				</ButtonContent>
			</button>
		);
	}
}
