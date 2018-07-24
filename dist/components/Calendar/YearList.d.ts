import React from 'react';
export interface IYearListProps {
    viewDate: Date;
    date: Date;
    maxDate?: Date | null;
    minDate?: Date | null;
    onDateSelect?(date: Date): void;
}
export default class YearList extends React.Component<IYearListProps> {
    render(): JSX.Element;
    private renderYear;
}
