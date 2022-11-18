import type { IAvatarProps } from '../Avatar/types';
import type { IBoxProps } from '../Box/types';

export interface ICardHeaderProps extends IBoxProps {
   avatar?: IAvatarProps['source'];
   title?: string;
   subtitle?: string;
   rightActions?: JSX.Element[];
}
