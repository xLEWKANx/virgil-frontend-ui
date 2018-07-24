import React from 'react';
import { SelectView } from './Calendar';
export interface IMonthSelector {
    date: Date;
    selectView: SelectView;
    onClick?(): void;
    onChangePeriod(date: Date): void;
}
export default class PeriodSelector extends React.Component<IMonthSelector> {
    handleIncrease: () => void;
    handleDecrease: () => void;
    render(): JSX.Element;
    private renderContent;
    private changeDateByPeriod;
}
