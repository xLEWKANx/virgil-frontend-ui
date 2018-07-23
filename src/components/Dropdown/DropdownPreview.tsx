import  React from 'react';
import  classNames from 'classnames';
import { ArrowIcon } from '../ArrowIcon';

const styles = require('./Dropdown.css');

export interface IDropdownPreviewProps extends React.HTMLAttributes<HTMLButtonElement> {
	isOpen?: boolean;
	icon?: JSX.Element;
	onClickOutside?(): void;
}

export class DropdownPreview extends React.Component<IDropdownPreviewProps> {
	render() {
		const { children, isOpen, icon, className, ...props } = this.props;

		const previewClass = classNames(styles.DropdownPreview, className, {
			[styles.Active]: isOpen,
		});

		const iconClass = [icon && icon.props.className, styles.DropdownPreviewIcon].join(' ');

		return (
			<button className={previewClass} {...props}>
				{icon && React.cloneElement(icon, { className: iconClass })}
				<span className={styles.DropdownPreviewText}>{children}</span>
				<ArrowIcon
					className={styles.DropdownArrowIcon}
					direction={isOpen ? ArrowIcon.Direction.Up : ArrowIcon.Direction.Down}
				/>
			</button>
		);
	}
}
