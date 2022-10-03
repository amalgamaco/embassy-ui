import { useMemo } from 'react';
import type {
	ComponentName, ComponentState, ComponentBaseStyledProps, ComponentStyledProps
} from '../core/components/types';
import { useTheme } from '../core/theme/hooks';

const useComponentPropsResolver = <C extends ComponentName>(
	componentName: C,
	props: ComponentBaseStyledProps<C>,
	state: ComponentState = {}
): ComponentStyledProps<C> => {
	const theme = useTheme();

	return useMemo<ComponentStyledProps<C>>( () => (
		theme?.resolvePropsFor( componentName, props, state ) as ComponentStyledProps<C> || {}
	), [ componentName, theme, props, state ] );
};

export default useComponentPropsResolver;
