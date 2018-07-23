import  React from 'react';
import { Dropdown, DropdownPreview, DropdownContent } from './';

export default [
	{
		component: Dropdown,
		name: 'Plain',
		props: {
			children: [
				<DropdownPreview key="preview">Calendar</DropdownPreview>,
				<DropdownContent key="content">
					privet
					<br />
					hi
					<p>bye!</p>
				</DropdownContent>,
			],
		},
	},
	{
		component: Dropdown,
		name: 'Open',
		props: {
			isOpen: true,
			children: [
				<DropdownPreview key="preview">Calendar</DropdownPreview>,
				<DropdownContent key="content">
					privet
					<br />
					hi
					<p>bye!</p>
				</DropdownContent>,
			],
		},
	},
];
