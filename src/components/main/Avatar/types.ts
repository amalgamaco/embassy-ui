import type { ImageProps } from 'react-native';
import type { IBoxProps } from '../Box/types';

export interface IAvatarProps extends Omit<IBoxProps, 'children'> {
    source: ImageProps['source'],
    size?: string,
    alt?: string,
}
