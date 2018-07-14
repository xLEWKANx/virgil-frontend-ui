import * as React from 'react';

const styles = require('./Calendar.css');

enum DayTheme {
	Default = styles.Default,
	Weekday = styles.Weekday,
	Inactive = styles.Inactive,
}

enum DayAction {
	None,
	Selected = styles.Selected,
}

export interface IDayProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: DayTheme;
	action?: DayAction;
	date: Date;
	onDateSelect?(date: Date): void;
}

export default class Day extends React.PureComponent<IDayProps> {
	static DayTheme = DayTheme;
	static DayAction = DayAction;

	render() {
		const {
			children,
			className,
			theme = styles.Default,
			action = DayAction.None,
			onDateSelect,
			...props
		} = this.props;
		const dayClass = [styles.Day, className, theme, action].join(' ');
		return (
			<button className={dayClass} onClick={this.handleClick} {...props}>
				{children}
			</button>
		);
	}

	private handleClick = () => {
		if (this.props.onDateSelect) {
			this.props.onDateSelect(this.props.date);
		}
	};
}
