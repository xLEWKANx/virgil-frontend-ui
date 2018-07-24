import React from 'react';
export interface IMonthListProps {
    viewDate: Date;
    date: Date;
    maxDate?: Date | null;
    minDate?: Date | null;
    onDateSelect?(date: Date): void;
}
export default class MonthList extends React.Component<IMonthListProps> {
    render(): JSX.Element;
    private renderMonth;
}
