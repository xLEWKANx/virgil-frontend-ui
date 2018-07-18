import * as React from 'react';
export interface IDropdownPreviewProps extends React.HTMLAttributes<HTMLButtonElement> {
    isOpen?: boolean;
    icon?: JSX.Element;
    onClickOutside?(): void;
}
export declare class DropdownPreview extends React.Component<IDropdownPreviewProps> {
    render(): JSX.Element;
}
