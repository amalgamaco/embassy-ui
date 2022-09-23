import type { ComponentStyledProps } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';
import type { IIconProps } from '../Icon/types';
import type { IIconButtonProps } from '../IconButton/types';

export interface IRadioProps extends Omit<IPressableProps, 'children' | 'size' | 'variant' >,
ComponentStyledProps<'Radio'>{
    selectedIcon?: string;
    unselectedIcon?: string;
    selected?: boolean;
    size?: IIconProps['size'];

    __icon?: IIconButtonProps[ '__icon' ]
}
