type SVGIconComponent = React.SFC<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
	const content: SVGIconComponent;
	export default content;
}
