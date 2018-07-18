import * as React from 'react';
export declare enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
interface IArrowIconProps extends React.SVGAttributes<SVGElement> {
    direction: Direction;
    className?: string;
}
export default class ArrowIcon extends React.Component<IArrowIconProps> {
    static Direction: typeof Direction;
    render(): JSX.Element;
}
export {};
