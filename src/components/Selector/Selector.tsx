import  React from 'react';
import Option, { IOptionProps, OptionValue } from './Option';
import classNames from 'classnames';
import { Dropdown, DropdownPreview, DropdownContent, IDropdownProps } from '../Dropdown';

const styles = require('./Selector.css');

export interface ISelectorProps extends IDropdownProps {
	activeValue?: OptionValue;
	placeholder?: string | null;
	className?: string;
	optionClassName?: string;
	onChange?(id: OptionValue): void;
}

export interface ISelectorState {
	isOpen: boolean;
	activeOption: React.ReactNode;
}

type OptionElement = React.ReactElement<IOptionProps & { children: React.ReactNode }>;

export default class Selector extends React.Component<ISelectorProps, ISelectorState> {
	constructor(props: ISelectorProps) {
		super(props);
		this.state = {
			isOpen: false,
			activeOption: this.findActiveOptionContent(this.props.activeValue),
		};
	}

	findActiveOptionContent = (activeValue: OptionValue) => {
		const activeOption = React.Children.toArray(this.props.children).find(
			(child: OptionElement) => child.props.value === activeValue,
		) as OptionElement;
		return activeOption ? activeOption.props.children : null;
	};

	toggleOptions = () => this.setState(state => ({ isOpen: !state.isOpen }));
	close = () => this.setState(state => ({ isOpen: false }));

	render() {
		const { children, className, ...props } = this.props;
		const options = React.Children.map(children, this.renderOption);

		const containerClass = [styles.Selector, className].join(' ');
		return (
			<Dropdown
				{...props}
				isOpen={this.state.isOpen}
				onClickOutside={this.close}
				className={containerClass}
			>
				<DropdownPreview onClick={this.toggleOptions}>
					{this.state.activeOption ? this.state.activeOption : this.props.placeholder}
				</DropdownPreview>
				<DropdownContent className={styles.OptionList}>{options}</DropdownContent>
			</Dropdown>
		);
	}

	private renderOption = (option: OptionElement) => {
		const optionClass = classNames(this.props.optionClassName, {
			OptionItem: true,
			ActiveItem: option.props.value === this.props.activeValue,
		});
		return (
			<Option
				{...option.props}
				className={optionClass}
				onOptionSelect={this.handleOptionSelect}
			/>
		);
	};

	private handleOptionSelect = (activeValue: OptionValue) => {
		if (this.props.onChange) {
			this.props.onChange(activeValue);
		}

		this.setState({
			isOpen: false,
			activeOption: this.findActiveOptionContent(activeValue),
		});
	};
}
