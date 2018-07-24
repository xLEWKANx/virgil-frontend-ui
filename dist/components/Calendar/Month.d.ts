import React from 'react';
export interface IMonthProps {
    date: Date;
    viewDate: Date;
    maxDate?: Date | null;
    minDate?: Date | null;
    onDateSelect?(date: Date): void;
}
export default class Month extends React.PureComponent<IMonthProps> {
    weeksOfMonth(): Date[];
    daysOfWeek(week: Date): Date[];
    getDayTheme(day: Date): DayTheme;
    render(): JSX.Element;
    private renderWeek;
    private renderDay;
    private renderWeekDayNames;
}
