import React from 'react';
import { OptionValue } from './Option';
import { IDropdownProps } from '../Dropdown';
export interface ISelectorProps extends IDropdownProps {
    activeValue?: OptionValue;
    placeholder?: string | null;
    className?: string;
    optionClassName?: string;
    onChange?(id: OptionValue): void;
}
export interface ISelectorState {
    isOpen: boolean;
    activeOption: React.ReactNode;
}
export default class Selector extends React.Component<ISelectorProps, ISelectorState> {
    constructor(props: ISelectorProps);
    findActiveOptionContent: (activeValue: OptionValue) => {} | null | undefined;
    toggleOptions: () => void;
    close: () => void;
    render(): JSX.Element;
    private renderOption;
    private handleOptionSelect;
}
