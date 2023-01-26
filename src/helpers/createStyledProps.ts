import type { ComponentName, ComponentStyledProps } from '..';

function createStyledProps<C extends ComponentName>( props: ComponentStyledProps<C> ) {
	return props;
}

export default createStyledProps;
