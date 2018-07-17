import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./Badge.css');

export interface IBadgeProps {
	className?: string;
}

const createBadge = (badgeStyle: string): React.SFC<IBadgeProps> => ({ className, ...props }) => (
	<div className={classNames(styles.Badge, badgeStyle, className)} {...props} />
);

export const GreyBadge = createBadge(styles.GreyBadge);
export const BlueBadge = createBadge(styles.BlueBadge);
