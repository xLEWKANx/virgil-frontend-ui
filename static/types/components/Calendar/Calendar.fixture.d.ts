import Calendar, { SelectView } from './Calendar';
declare const _default: ({
    component: typeof Calendar;
    name: string;
    props: {
        className: any;
        onDateSelect: (day: Date) => void;
        selectView?: undefined;
    };
} | {
    component: typeof Calendar;
    name: string;
    props: {
        className: any;
        onDateSelect?: undefined;
        selectView?: undefined;
    };
} | {
    component: typeof Calendar;
    name: string;
    props: {
        selectView: SelectView;
        className: any;
        onDateSelect?: undefined;
    };
})[];
export default _default;
