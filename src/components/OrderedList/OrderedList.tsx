import React from 'react';

const styles = require('./OrderedList.css');

export interface IOrderedListProps extends React.HTMLAttributes<HTMLOListElement> {}

export default class OrderedList extends React.Component<IOrderedListProps> {
	render() {
		const { className, ...props } = this.props;
		const listClass = [styles.List, className].join(' ');
		return (
			<ol className={listClass} {...props}>
				{this.props.children}
			</ol>
		);
	}
}
