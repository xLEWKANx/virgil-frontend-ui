import  React from 'react';

const styles = require('./Calendar.css');

export interface IWeekProps {}

export default class Week extends React.PureComponent<IWeekProps> {
	render() {
		return <div className={styles.Week}>{this.props.children}</div>;
	}
}
