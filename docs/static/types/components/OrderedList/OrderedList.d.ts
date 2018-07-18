import * as React from 'react';
export interface IOrderedListProps extends React.HTMLAttributes<HTMLOListElement> {
}
export default class OrderedList extends React.Component<IOrderedListProps> {
    render(): JSX.Element;
}
