import React from 'react';
import classNames from 'classnames';

// import ArrowUp from 'assets/images/icons/arrow-up.svg';

const styles = require('./ArrowIcon.css');

export enum Direction {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

interface IArrowIconProps extends React.SVGAttributes<SVGElement> {
	direction: Direction;
	className?: string;
}

export default class ArrowIcon extends React.Component<IArrowIconProps> {
	static Direction = Direction;

	render() {
		const { direction, className, ...props } = this.props;
		const iconStyle = classNames(styles.Default, direction, className);
		return <svg {...props} className={iconStyle} />;
	}
}
