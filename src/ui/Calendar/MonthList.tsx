import * as React from 'react';
import * as classnames from 'classnames';
import { format, isSameMonth, isBefore, isAfter } from 'date-fns';

const styles = require('./Calendar.css');

export interface IMonthListProps {
	viewDate: Date;
	date: Date;
	maxDate?: Date | null;
	minDate?: Date | null;
	onDateSelect?(date: Date): void;
}

export default class MonthList extends React.Component<IMonthListProps> {
	render() {
		const { viewDate } = this.props;
		return (
			<div className={styles.PeriodContainer}>
				<div className={styles.Row}>
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 0)))}
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 1)))}
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 2)))}
				</div>
				<div className={styles.Row}>
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 3)))}
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 4)))}
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 5)))}
				</div>
				<div className={styles.Row}>
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 6)))}
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 7)))}
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 8)))}
				</div>
				<div className={styles.Row}>
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 9)))}
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 10)))}
					{this.renderMonth(new Date(Date.UTC(viewDate.getFullYear(), 11)))}
				</div>
			</div>
		);
	}

	private renderMonth = (month: Date) => {
		const handleDateSelect = () => this.props.onDateSelect && this.props.onDateSelect(month);
		const isSame = isSameMonth(month, this.props.date);
		const isBeforeMin = this.props.minDate && isBefore(month, this.props.minDate);
		const isAfterMax = this.props.maxDate && isAfter(month, this.props.maxDate);

		const monthClass = classnames({
			[styles.ListMonth]: true,
			[styles.Selected]: isSame,
			[styles.Inactive]: isBeforeMin || isAfterMax,
		});
		return (
			<button
				disabled={Boolean(isBeforeMin || isAfterMax)}
				className={monthClass}
				onClick={handleDateSelect}
			>
				{format(month, 'MMM')}
			</button>
		);
	};
}
