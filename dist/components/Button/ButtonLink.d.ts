import React from 'react';
import { IButtonContent } from './ButtonContent';
import { ButtonTheme } from './Button';
export interface IButtonLinkProps extends React.AnchorHTMLAttributes<{}>, IButtonContent {
}
export default class ButtonLink extends React.Component<IButtonLinkProps> {
    static ButtonTheme: typeof ButtonTheme;
    render(): JSX.Element;
}
