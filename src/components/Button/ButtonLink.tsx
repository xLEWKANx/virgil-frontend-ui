import * as React from 'react';
import * as cn from 'classnames/bind';
import ButtonContent, { IButtonContent } from './ButtonContent';
import { ButtonTheme } from './Button';

const styles = require('./Button.css');
const classNames = cn.bind(styles);

export interface IButtonLinkProps extends React.AnchorHTMLAttributes<{}>, IButtonContent {}

export default class ButtonLink extends React.Component<IButtonLinkProps> {
	static ButtonTheme = ButtonTheme;

	render() {
		const {
			className,
			icon,
			children,
			theme = ButtonTheme.Primary,
			loading,
			...props
		} = this.props;

		const wrapperClass = classNames(styles.Link, className, theme);

		return (
			<a {...props} className={wrapperClass}>
				<ButtonContent icon={icon} loading={loading}>
					{children}
				</ButtonContent>
			</a>
		);
	}
}
