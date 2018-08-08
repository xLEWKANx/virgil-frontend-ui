import React from 'react';
import startOfMonthFn from 'date-fns/start_of_month';
import addWeeksFn from 'date-fns/add_weeks';
import startOfWeekFn from 'date-fns/start_of_week';
import addDaysFn from 'date-fns/add_days';
import isSameDayFn from 'date-fns/is_same_day';
import format from 'date-fns/format';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import startOfDay from 'date-fns/start_of_day';
import endOfDay from 'date-fns/end_of_day';
import Day from './Day';
import Week from './Week';

const styles = require('./Calendar.css');

export interface IMonthProps {
	date: Date;
	viewDate: Date;
	maxDate?: Date | null;
	minDate?: Date | null;
	onDateSelect?(date: Date): void;
}

export default class Month extends React.PureComponent<IMonthProps> {
	weeksOfMonth() {
		const weeks = [];
		for (let weekCount = 0; weekCount < 6; weekCount++) {
			const nextWeekDate = addWeeksFn(startOfMonthFn(this.props.viewDate), weekCount);
			weeks.push(nextWeekDate);
		}

		return weeks;
	}

	daysOfWeek(week: Date) {
		const days = [];
		for (let dayCount = 0; dayCount < 7; dayCount++) {
			const nextDay = addDaysFn(startOfWeekFn(week, { weekStartsOn: 1 }), dayCount);
			days.push(nextDay);
		}

		return days;
	}

	getDayTheme(day: Date) {
		const { maxDate, minDate } = this.props;
		if (maxDate && isAfter(day, endOfDay(maxDate))) {
			return Day.DayTheme.Inactive;
		}
		if (minDate && isBefore(day, startOfDay(minDate))) {
			return Day.DayTheme.Inactive;
		}

		return Day.DayTheme.Default;
	}

	render() {
		const weeks = this.weeksOfMonth();
		return (
			<div className={styles.Month}>
				<Week>{this.daysOfWeek(weeks[1]).map(this.renderWeekDayNames)}</Week>
				{weeks.map(this.renderWeek)}
			</div>
		);
	}

	private renderWeek = (week: Date) => {
		return <Week key={week.getTime()}>{this.daysOfWeek(week).map(this.renderDay)}</Week>;
	};

	private renderDay = (day: Date) => {
		day = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate()));
		return (
			<Day
				key={day.getTime()}
				date={day}
				onDateSelect={this.props.onDateSelect}
				theme={this.getDayTheme(day)}
				action={
					isSameDayFn(this.props.date, day) ? Day.DayAction.Selected : Day.DayAction.None
				}
				disabled={this.getDayTheme(day) === Day.DayTheme.Inactive ? true : false}
			>
				{format(day, 'D')}
			</Day>
		);
	};

	private renderWeekDayNames = (day: Date) => {
		return (
			<Day key={day.getTime()} date={day} theme={Day.DayTheme.Weekday} disabled={true}>
				{format(day, 'dd')}
			</Day>
		);
	};
}
