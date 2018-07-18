import * as React from 'react';
export declare type OptionValue = string | number | null | undefined;
export interface IOptionProps extends React.HTMLAttributes<HTMLButtonElement> {
    value: OptionValue;
    onOptionSelect?(value: OptionValue): void;
}
export default class Option extends React.Component<IOptionProps> {
    render(): JSX.Element;
    private handleSelect;
}
