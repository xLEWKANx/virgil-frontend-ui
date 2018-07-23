import  React from 'react';
import Button, { ButtonTheme } from './Button';
import PlusIcon from '../Icons/Plus';
import CopyIcon from '../Icons/Copy';

export default [
	{
		component: Button,
		name: 'Primary',
		props: {
			type: 'submit',
			disabled: false,
			children: 'Primary',
			loading: false,
		},
	},
	{
		component: Button,
		name: 'Primary-Icon',
		props: {
			type: 'submit',
			disabled: false,
			children: 'Primary',
			icon: <PlusIcon />,
			loading: false,
		},
	},
	{
		component: Button,
		name: 'Primary-Loading',
		props: {
			type: 'submit',
			disabled: false,
			children: 'Primary',
			loading: true,
		},
	},
	{
		component: Button,
		name: 'Inline',
		props: {
			type: 'submit',
			disabled: false,
			children: 'Inline',
			theme: Button.ButtonTheme.Inline,
		},
	},
	{
		component: Button,
		name: 'SmallOutlineRed',
		props: {
			type: 'submit',
			disabled: false,
			children: 'small outline',
			icon: <CopyIcon />,
			theme: Button.ButtonTheme.SmallOutlineRed,
		},
	},
	{
		component: Button,
		name: 'SmallOutlineRed-Loading',
		props: {
			type: 'submit',
			disabled: false,
			loading: true,
			children: 'small outline',
			icon: <CopyIcon />,
			theme: ButtonTheme.SmallOutlineRed,
		},
	},
	{
		component: Button,
		name: 'SmallOutlineWhite-Loading',
		props: {
			type: 'submit',
			disabled: false,
			loading: true,
			children: 'small outline',
			icon: <PlusIcon />,
			theme: Button.ButtonTheme.SmallOutlineRed,
		},
	},
];
