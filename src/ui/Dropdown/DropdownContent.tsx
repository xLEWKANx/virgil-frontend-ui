import * as React from 'react';
import { isDescendant } from 'lib/dom';

const styles = require('./Dropdown.css');

export interface IDropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
	previewRef?: HTMLElement;
	onClickOutside?(): void;
}

export class DropdownContent extends React.Component<IDropdownContentProps> {
	container: HTMLDivElement;

	componentDidMount() {
		document.body.addEventListener('click', this.onClickOutside);
	}

	componentWillUnmount() {
		document.body.removeEventListener('click', this.onClickOutside);
	}

	render() {
		const { children, className, onClickOutside, previewRef, ...props } = this.props;
		const contentClass = [styles.DropdownContent, className].join(' ');
		return (
			<div className={contentClass} ref={this.getRef} {...props}>
				{children}
			</div>
		);
	}

	private getRef = (div: HTMLDivElement) => (this.container = div);

	private onClickOutside = (e: Event) => {
		if (!this.props.onClickOutside || !e.target) {
			return;
		}
		if (
			!isDescendant(this.container, e.target as HTMLElement) &&
			!isDescendant(this.props.previewRef!, e.target as HTMLElement)
		) {
			this.props.onClickOutside!();
		}
	};
}
