import * as React from 'react';
import * as cn from 'classnames/bind';

import ArrowUp from 'assets/images/icons/arrow-up.svg';

const styles = require('./ArrowIcon.css');
const classNames = cn.bind(styles);

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

export class ArrowIcon extends React.Component<IArrowIconProps> {
	static Direction = Direction;

	render() {
		const { direction, className, ...props } = this.props;
		const iconStyle = classNames(styles.Default, direction, className);
		return <ArrowUp {...props} className={iconStyle} />;
	}
}
