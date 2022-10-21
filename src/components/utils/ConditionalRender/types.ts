export interface IConditionalRenderProps {
	children: JSX.Element | JSX.Element[] | string | null;
	render: boolean
}
