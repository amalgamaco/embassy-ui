import { useTheme } from '../../../core/theme/hooks';
import { useComponentPropsResolver } from '../../../hooks';
import type { IAvatarProps } from './types';

type IUseAvatarPropsResolver = Omit<IAvatarProps, 'source'>;
const useAvatarPropsResolver = ( props: IUseAvatarPropsResolver ) => {
	const theme = useTheme();
	const {
		__image: imageProps,
		size: sizeProp,
		...containerProps
	} = useComponentPropsResolver( 'Avatar', props );

	const size = sizeProp ? theme?.sizeFor( 'Avatar', sizeProp as string ) : undefined;

	containerProps.width = size;
	containerProps.height = size;

	return { avatarProps: containerProps, imageProps };
};

export default useAvatarPropsResolver;
