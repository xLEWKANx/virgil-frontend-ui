import { ButtonTheme } from './Button';
import * as React from 'react';
import * as cn from 'classnames/bind';
import { SpinnerIcon } from 'components/icons';

const styles = require('./Button.css');
const classNames = cn.bind(styles);

export interface IButtonContent {
	icon?: JSX.Element;
	loading?: boolean;
	theme?: ButtonTheme;
}

export default class ButtonContent extends React.Component<IButtonContent> {
	render() {
		const { children, icon, loading } = this.props;
		let iconProps, iconClass;
		if (icon) {
			iconProps = icon.props;
			iconClass = classNames(styles.Icon, icon.props.className);
		}
		return (
			<React.Fragment>
				{children}
				{icon != null && React.cloneElement(icon, { ...iconProps, className: iconClass })}
				{loading && <SpinnerIcon className={styles.Spinner} />}
			</React.Fragment>
		);
	}
}
