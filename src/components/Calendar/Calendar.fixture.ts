import Calendar, { SelectView } from './Calendar';

const styles = require('./Calendar.css');

export default [
	{
		component: Calendar,
		name: 'Calendar-Small',
		props: {
			className: styles.ContainerSmall,
			// tslint:disable-next-line no-console
			onDateSelect: (day: Date) => console.log(day.toISOString()),
		},
	},
	{
		component: Calendar,
		name: 'Calendar-Big',
		props: {
			className: styles.ContainerBig,
		},
	},
	{
		component: Calendar,
		name: 'Calendar-Months',
		props: {
			selectView: SelectView.Month,
			className: styles.ContainerSmall,
		},
	},
	{
		component: Calendar,
		name: 'Calendar-Years',
		props: {
			selectView: SelectView.Year,
			className: styles.ContainerSmall,
		},
	},
];
