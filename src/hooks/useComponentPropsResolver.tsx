import { useMemo } from 'react';
import type {
	ComponentName, ComponentState, PropsWithVariant, ComponentStyledProps
} from '../core/components/types';
import { useTheme } from '../core/theme/hooks';

const useComponentPropsResolver = <C extends ComponentName>(
	componentName: C,
	props: PropsWithVariant,
	state: ComponentState = {}
): ComponentStyledProps<C> => {
	const theme = useTheme();

	return useMemo<ComponentStyledProps<C>>( () => (
		theme?.resolvePropsFor( componentName, props, state ) as ComponentStyledProps<C> || {}
	), [ theme, props, state ] );
};

export default useComponentPropsResolver;
