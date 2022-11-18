import type { ImageProps } from 'react-native';
import type { IBoxProps } from '../Box/types';

export interface IImageProps extends IBoxProps,
Omit<ImageProps, 'borderRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius'
| 'borderBottomLeftRadius' | 'borderBottomRightRadius' | 'width' | 'height' | 'style' > {}
