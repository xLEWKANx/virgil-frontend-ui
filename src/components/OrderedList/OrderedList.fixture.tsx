import  React from 'react';
import OrderedList from './OrderedList';

export default [
	{
		component: OrderedList,
		name: 'OrderedList-default',
		props: {
			children: [<li key="1">yo</li>, <li key="2">privet</li>],
		},
	},
];
