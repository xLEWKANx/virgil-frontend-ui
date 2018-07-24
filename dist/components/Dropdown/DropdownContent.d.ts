import React from 'react';
export interface IDropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
    previewRef?: HTMLElement;
    onClickOutside?(): void;
}
export declare class DropdownContent extends React.Component<IDropdownContentProps> {
    container: HTMLDivElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private getRef;
    private onClickOutside;
}
