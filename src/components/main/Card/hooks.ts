import { useComponentPropsResolver } from '../../../hooks';
import type { IBoxProps } from '../Box/types';
import type { IHStackProps, IVStackProps } from '../Stack/types';
import type { ICardHeaderProps } from './types';

const useCardHeaderPropsResolver = ( props: ICardHeaderProps ) => {
	const {
		__avatar: avatarProps,
		__infoContainer: infoContainerProps,
		__rightActionsContainer: rightActionsContainerProps,
		__title: titleProps,
		__subtitle: subtitleProps,
		...containerProps
	} = useComponentPropsResolver( 'CardHeader', props );

	return {
		containerProps,
		infoContainerProps,
		rightActionsContainerProps,
		avatarProps,
		titleProps,
		subtitleProps
	};
};
export const useCardPropsResolver = ( props: IBoxProps ) => useComponentPropsResolver( 'Card', props );
export const useCardContentPropsResolver = ( props: IVStackProps ) => useComponentPropsResolver( 'CardContent', props );
export const useCardActionsPropsResolver = ( props: IHStackProps ) => useComponentPropsResolver( 'CardActions', props );
export const useCardMediaPropsResolver = ( props: IBoxProps ) => useComponentPropsResolver( 'CardMedia', props );
export default useCardHeaderPropsResolver;
