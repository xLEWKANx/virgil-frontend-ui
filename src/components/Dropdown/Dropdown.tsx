import React from 'react';
import { Manager, Target, Popper } from 'react-popper';
import Portal from 'utils/Portal';
import { DropdownPreview, IDropdownPreviewProps } from './DropdownPreview';
import { DropdownContent, IDropdownContentProps } from './DropdownContent';

const styles = require('./Dropdown.css');

type DropdownChild = React.ReactElement<
	(IDropdownPreviewProps | IDropdownContentProps) & { children: React.ReactNode }
>;

interface IPopperTargetProps {
	ref: (ref: HTMLElement | null) => void;
	style: React.CSSProperties;
}

export interface IDropdownProps {
	isOpen?: boolean;
	className?: string;
	icon?: JSX.Element;
	onClick?(): string;
	onClickOutside?(): void;
}

export default class Dropdown extends React.Component<IDropdownProps> {
	el: HTMLElement | null;

	render() {
		const { children } = this.props;
		const content = React.Children.map(children, this.renderDropdownChild);
		const containerClass = [styles.DropdownContainer, this.props.className].join(' ');
		return <Manager className={containerClass}>{content}</Manager>;
	}

	private renderDropdownChild = (child: DropdownChild) => {
		if (child.type === DropdownPreview) {
			const preview = React.cloneElement(child, {
				isOpen: this.props.isOpen,
				icon: this.props.icon,
				...child.props,
			});

			return (
				<Target innerRef={this.getRef} onClick={this.props.onClick}>
					{preview}
				</Target>
			);
		} else if (child.type === DropdownContent) {
			if (!this.props.isOpen) {
				return null;
			}
			const content = React.cloneElement(child as React.ReactElement<any>, {
				onClickOutside: this.props.onClickOutside,
				previewRef: this.el,
				...child.props,
			});

			return (
				<Popper
					modifiers={{
						offset: { offset: '0, 10' },
					}}
					placement="bottom-start"
				>
					{({ popperProps, restProps }) => (
						<Portal>
							<div {...this.modifyPopperProps(popperProps)}>{content}</div>
						</Portal>
					)}
				</Popper>
			);
		} else {
			throw new Error(
				'Use DropdownPreview and DropdownContent in Dropdown instead of ' + child.type,
			);
		}
	};

	private modifyPopperProps = (popperProps: IPopperTargetProps) => {
		if (this.el) {
			popperProps.style.minWidth = this.el.clientWidth;
		}
		return popperProps;
	};

	private getRef = (el: HTMLElement | null) => {
		return (this.el = el);
	};
}
