import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Portal extends React.Component<{ target?: Element }> {
	render() {
		const {
			children,
			target = document.getElementById('portal') || document.body,
		} = this.props;
		return ReactDOM.createPortal(children, target);
	}
}
