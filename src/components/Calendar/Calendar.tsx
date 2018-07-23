import  React from 'react';

import Month from './Month';
import PeriodSelector from './PeriodSelector';
import MonthList from './MonthList';
import YearList from './YearList';
import { startOfMonth, endOfMonth } from 'date-fns';

const styles = require('./Calendar.css');

export enum SelectType {
	Day,
	Week,
	Month,
	Year,
}

export enum SelectView {
	Day,
	Month,
	Year,
}

export interface ICalendarProps {
	selectType?: SelectType;
	selectView?: SelectView;
	date?: Date;
	maxDate?: Date | null;
	minDate?: Date | null;
	className?: string;
	onDateSelect?(date: Date): void;
}

export interface ICalendarState {
	date: Date;
	view: SelectView;
}

export default class Calendar extends React.Component<ICalendarProps, ICalendarState> {
	static defaultProps: Partial<ICalendarProps> = {
		date: new Date(),
		selectView: SelectView.Day,
	};

	state = {
		date: this.props.date || new Date(),
		view: this.props.selectView!,
	};

	componentWillReceiveProps(props: ICalendarProps) {
		if (props.date) {
			this.setState({ date: props.date });
		}
	}

	render() {
		const { date } = this.state;

		let calendarContent;
		if (this.state.view === SelectView.Year) {
			calendarContent = this.renderYearList();
		} else if (this.state.view === SelectView.Month) {
			calendarContent = this.renderMonthList();
		} else {
			calendarContent = this.renderMonth();
		}

		return (
			<div className={[this.props.className, styles.Container].join(' ')}>
				<PeriodSelector
					selectView={this.state.view}
					onChangePeriod={this.handleChangePeriod}
					onClick={this.selectPeriod}
					date={date}
				/>
				{calendarContent}
			</div>
		);
	}

	private renderMonth = () => (
		<Month
			onDateSelect={this.props.onDateSelect}
			viewDate={this.state.date}
			date={this.props.date!}
			maxDate={this.props.maxDate}
			minDate={this.props.minDate}
		/>
	);
	private renderMonthList = () => (
		<MonthList
			viewDate={this.state.date}
			date={this.props.date!}
			maxDate={this.props.maxDate && endOfMonth(this.props.maxDate)}
			minDate={this.props.minDate && startOfMonth(this.props.minDate)}
			onDateSelect={this.selectMonthList}
		/>
	);

	private renderYearList = () => (
		<YearList
			viewDate={this.state.date}
			date={this.props.date!}
			onDateSelect={this.selectYearList}
			minDate={this.props.minDate}
			maxDate={this.props.maxDate}
		/>
	);

	private handleChangePeriod = (date: Date) => this.setState({ date });

	private selectDay = () => this.setState({ view: SelectView.Day });
	private selectMonth = () => this.setState({ view: SelectView.Month });
	private selectYear = () => this.setState({ view: SelectView.Year });

	private selectMonthList = (date: Date) => {
		const { onDateSelect, selectView } = this.props;
		if (selectView !== SelectView.Month) {
			this.setState({
				view: SelectView.Day,
				date,
			});
		} else if (onDateSelect) {
			onDateSelect(date);
		}
	};

	private selectYearList = (date: Date) => {
		const { onDateSelect, selectView } = this.props;
		if (selectView !== SelectView.Year) {
			this.setState({
				view: SelectView.Month,
				date,
			});
		} else if (onDateSelect) {
			onDateSelect(date);
		}
	};

	private selectPeriod = () => {
		switch (this.state.view) {
			case SelectView.Year:
				this.selectDay();
				break;
			case SelectView.Month:
				this.selectYear();
				break;
			case SelectView.Day:
			default:
				this.selectMonth();
		}
	};
}
