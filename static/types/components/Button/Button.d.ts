import * as React from 'react';
import { IButtonContent } from './ButtonContent';
export declare enum ButtonTheme {
    Primary,
    Secondary,
    Inline,
    Outline,
    SmallOutlineRed,
    SmallOutlineWhite
}
export interface IButtonProps extends React.ButtonHTMLAttributes<{}>, IButtonContent {
}
export default class Button extends React.Component<IButtonProps> {
    static ButtonTheme: typeof ButtonTheme;
    render(): JSX.Element;
}
