import type { IChipProps } from './types';
import { useComponentPropsResolver } from '../../../hooks';

export const useChipPropsResolver = ( props: Omit<IChipProps, 'label'> ) => {
	const {
		__stack: stackProps,
		__label: labelProps,
		...containerProps
	} = useComponentPropsResolver( 'Chip', props ) as IChipProps;

	return {
		containerProps,
		stackProps,
		labelProps
	};
};
