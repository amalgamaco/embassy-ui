import type { ComponentStyledProps } from '../../../core/components/types';
import type { IPressableProps } from '../Pressable/types';
import type { IIconProps } from '../Icon/types';

export interface IRadioButtonProps extends Omit<IPressableProps, 'children' | 'size' | 'variant' >,
ComponentStyledProps<'RadioButton'>{
    selectedIcon?: string;
    unselectedIcon?: string;
    selected?: boolean;
    size?: IIconProps['size'];
}
