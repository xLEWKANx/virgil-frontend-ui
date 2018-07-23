import  React from 'react';
import  ReactDOM from 'react-dom';

export default class Portal extends React.Component<{ target?: Element }> {
	render() {
		if (typeof document === 'undefined') return null;
		const {
			children,
			target = document.getElementById('portal') || document.body,
		} = this.props;
		return ReactDOM.createPortal(children, target);
	}
}
