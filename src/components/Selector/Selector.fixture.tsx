import * as React from 'react';
import Selector from './Selector';
import Option from './Option';

enum EnumExample {
	One,
	Two,
	Three,
}

export default [
	{
		component: Selector,
		name: 'Selector-Default',
		props: {
			children: [
				<Option key="1" value="1">
					one
				</Option>,
				<Option key="2" value="2">
					two
				</Option>,
				<Option key="3" value="3">
					three
				</Option>,
			],
		},
	},
	{
		component: Selector,
		name: 'Selector-Placeholder',
		props: {
			placeholder: 'yo',
			children: [
				<Option key="1" value="1">
					one
				</Option>,
				<Option key="2" value="2">
					two
				</Option>,
				<Option key="3" value="3">
					three
				</Option>,
			],
		},
	},
	{
		component: Selector,
		name: 'Selector-Enum',
		props: {
			children: [
				<Option key="1" value={EnumExample.One}>
					one
				</Option>,
				<Option key="2" value={EnumExample.Two}>
					two
				</Option>,
				<Option key="3" value={EnumExample.Three}>
					three
				</Option>,
			],
		},
	},
];
