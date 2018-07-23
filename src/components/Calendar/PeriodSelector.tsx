import React from 'react';
import { ArrowIcon } from '../ArrowIcon';
import format from 'date-fns/format';
import { SelectView } from './Calendar';
import { addYears, addMonths } from 'date-fns';

const styles = require('./Calendar.css');

export interface IMonthSelector {
	date: Date;
	selectView: SelectView;
	onClick?(): void;
	onChangePeriod(date: Date): void;
}

export default class PeriodSelector extends React.Component<IMonthSelector> {
	handleIncrease = () => this.props.onChangePeriod(this.changeDateByPeriod(1));
	handleDecrease = () => this.props.onChangePeriod(this.changeDateByPeriod(-1));

	render() {
		const { onClick } = this.props;
		return (
			<div className={styles.MonthsSelector}>
				<button onClick={this.handleDecrease}>
					<ArrowIcon direction={ArrowIcon.Direction.Left} />
				</button>
				<button onClick={onClick} className={styles.MonthsText}>
					{this.renderContent()}
				</button>
				<button onClick={this.handleIncrease}>
					<ArrowIcon direction={ArrowIcon.Direction.Right} />
				</button>
			</div>
		);
	}

	private renderContent = () => {
		switch (this.props.selectView) {
			case SelectView.Year:
				const year = Math.floor(this.props.date.getFullYear() / 10);
				return `${year * 10} - ${year * 10 + 9}`;
			case SelectView.Month:
				return format(this.props.date, 'YYYY');
			case SelectView.Day:
			default:
				return format(this.props.date, 'MMMM, YYYY');
		}
	};

	private changeDateByPeriod = (k: 1 | -1) => {
		let date;
		switch (this.props.selectView) {
			case SelectView.Year:
				date = addYears(this.props.date, 10 * k);
				break;
			case SelectView.Month:
				date = addYears(this.props.date, 1 * k);
				break;
			case SelectView.Day:
			default:
				date = addMonths(this.props.date, 1 * k);
		}
		return date;
	};
}
