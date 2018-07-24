import React from 'react';
export interface IDropdownProps {
    isOpen?: boolean;
    className?: string;
    icon?: JSX.Element;
    onClick?(): string;
    onClickOutside?(): void;
}
export default class Dropdown extends React.Component<IDropdownProps> {
    el: HTMLElement | null;
    render(): JSX.Element;
    private renderDropdownChild;
    private modifyPopperProps;
    private getRef;
}
