import React from 'react';
export declare enum DayTheme {
    Default,
    Weekday,
    Inactive
}
declare enum DayAction {
    None = 0,
    Selected
}
export interface IDayProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: DayTheme;
    action?: DayAction;
    date: Date;
    onDateSelect?(date: Date): void;
}
export default class Day extends React.PureComponent<IDayProps> {
    static DayTheme: typeof DayTheme;
    static DayAction: typeof DayAction;
    render(): JSX.Element;
    private handleClick;
}
export {};
