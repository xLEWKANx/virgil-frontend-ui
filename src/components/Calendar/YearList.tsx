import React from 'react';
import classnames from 'classnames';
import format from 'date-fns/format';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import isSameYear from 'date-fns/is_same_year';
import startOfYear from 'date-fns/start_of_year';
import endOfYear from 'date-fns/end_of_year';

const styles = require('./Calendar.css');

export interface IYearListProps {
	viewDate: Date;
	date: Date;
	maxDate?: Date | null;
	minDate?: Date | null;
	onDateSelect?(date: Date): void;
}

export default class YearList extends React.Component<IYearListProps> {
	render() {
		return (
			<div className={styles.PeriodContainer}>
				<div className={styles.Row}>
					{this.renderYear(-1)}
					{this.renderYear(0)}
					{this.renderYear(1)}
				</div>
				<div className={styles.Row}>
					{this.renderYear(2)}
					{this.renderYear(3)}
					{this.renderYear(4)}
				</div>
				<div className={styles.Row}>
					{this.renderYear(5)}
					{this.renderYear(6)}
					{this.renderYear(7)}
				</div>
				<div className={styles.Row}>
					{this.renderYear(8)}
					{this.renderYear(9)}
					{this.renderYear(10)}
				</div>
			</div>
		);
	}

	private renderYear = (shift: number) => {
		const { viewDate } = this.props;
		const startYear = Math.floor(viewDate.getFullYear() / 10) * 10;
		const year = new Date(Date.UTC(startYear + shift, 0));
		const handleDateSelect = () => this.props.onDateSelect && this.props.onDateSelect(year);
		const isAfterMaxDate = this.props.maxDate && isAfter(year, endOfYear(this.props.maxDate));
		const isBeforeMinDate =
			this.props.minDate && isBefore(year, startOfYear(this.props.minDate));

		const yearClass = classnames({
			[styles.ListYear]: true,
			[styles.Selected]: isSameYear(this.props.date, year),
			[styles.Inactive]: isAfterMaxDate || isBeforeMinDate,
		});

		return (
			<button
				disabled={Boolean(isAfterMaxDate || isBeforeMinDate)}
				className={yearClass}
				onClick={handleDateSelect}
			>
				{format(year, 'YYYY')}
			</button>
		);
	};
}
