import  React from 'react';

const styles = require('./Selector.css');

export type OptionValue = string | number | null | undefined;

export interface IOptionProps extends React.HTMLAttributes<HTMLButtonElement> {
	value: OptionValue;
	onOptionSelect?(value: OptionValue): void;
}

export default class Option extends React.Component<IOptionProps> {
	render() {
		const { children, className, onOptionSelect, value, ...props } = this.props;
		const optionClass = [styles.Option, className].join(' ');
		return (
			<button className={optionClass} {...props} onClick={this.handleSelect}>
				{children}
			</button>
		);
	}

	private handleSelect = () => {
		if (this.props.onOptionSelect) {
			this.props.onOptionSelect(this.props.value);
		}
	};
}
