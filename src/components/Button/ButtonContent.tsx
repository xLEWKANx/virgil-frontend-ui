import { ButtonTheme } from './Button';
import React from 'react';
import classNames from 'classnames';

const styles = require('./Button.css');

export interface IButtonContent {
	icon?: JSX.Element;
	loading?: boolean;
	theme?: ButtonTheme;
}

export default class ButtonContent extends React.Component<IButtonContent> {
	render() {
		const { children, icon} = this.props;
		let iconProps, iconClass;
		if (icon) {
			iconProps = icon.props;
			iconClass = classNames(styles.Icon, icon.props.className);
		}
		return (
			<React.Fragment>
				{children}
				{icon != null && React.cloneElement(icon, { ...iconProps, className: iconClass })}
				{/* {loading && <SpinnerIcon className={styles.Spinner} />} */}
			</React.Fragment>
		);
	}
}
