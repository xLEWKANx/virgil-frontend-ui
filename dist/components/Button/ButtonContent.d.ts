import { ButtonTheme } from './Button';
import React from 'react';
export interface IButtonContent {
    icon?: JSX.Element;
    loading?: boolean;
    theme?: ButtonTheme;
}
export default class ButtonContent extends React.Component<IButtonContent> {
    render(): JSX.Element;
}
