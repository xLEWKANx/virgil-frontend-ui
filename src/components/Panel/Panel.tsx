import React from 'react';
import classNames from 'classnames';

const styles = require('./Panel.css');

interface IPanelProps {
	className?: string;
}

const createPanel = (panelStyle: string): React.SFC<IPanelProps> => ({ className, ...props }) => (
	<div className={classNames(styles.Panel, panelStyle, className)} {...props} />
);

export const DarkPanel = createPanel(styles.PanelDark);
export const LightPanel = createPanel(styles.PanelLight);
