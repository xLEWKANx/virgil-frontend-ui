import * as React from 'react';
export declare enum SelectType {
    Day = 0,
    Week = 1,
    Month = 2,
    Year = 3
}
export declare enum SelectView {
    Day = 0,
    Month = 1,
    Year = 2
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
    static defaultProps: Partial<ICalendarProps>;
    state: {
        date: Date;
        view: SelectView;
    };
    componentWillReceiveProps(props: ICalendarProps): void;
    render(): JSX.Element;
    private renderMonth;
    private renderMonthList;
    private renderYearList;
    private handleChangePeriod;
    private selectDay;
    private selectMonth;
    private selectYear;
    private selectMonthList;
    private selectYearList;
    private selectPeriod;
}
