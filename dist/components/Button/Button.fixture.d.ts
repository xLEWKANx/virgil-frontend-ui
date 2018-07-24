/// <reference types="react" />
import Button, { ButtonTheme } from './Button';
declare const _default: ({
    component: typeof Button;
    name: string;
    props: {
        type: string;
        disabled: boolean;
        children: string;
        loading: boolean;
        icon?: undefined;
        theme?: undefined;
    };
} | {
    component: typeof Button;
    name: string;
    props: {
        type: string;
        disabled: boolean;
        children: string;
        icon: JSX.Element;
        loading: boolean;
        theme?: undefined;
    };
} | {
    component: typeof Button;
    name: string;
    props: {
        type: string;
        disabled: boolean;
        children: string;
        theme: ButtonTheme;
        loading?: undefined;
        icon?: undefined;
    };
} | {
    component: typeof Button;
    name: string;
    props: {
        type: string;
        disabled: boolean;
        children: string;
        icon: JSX.Element;
        theme: ButtonTheme;
        loading?: undefined;
    };
} | {
    component: typeof Button;
    name: string;
    props: {
        type: string;
        disabled: boolean;
        loading: boolean;
        children: string;
        icon: JSX.Element;
        theme: ButtonTheme;
    };
})[];
export default _default;
