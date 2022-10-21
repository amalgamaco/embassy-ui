import type { IPressableProps } from '../Pressable/types';

export interface ISwitchProps extends Omit<IPressableProps, 'children'>{
    initialValue?: boolean,
    disabled?: boolean,

    onIcon?: JSX.Element,
	offIcon?: JSX.Element,

    animationDuration?: number,

    withIcon?: boolean,

    onChange?: ( value: boolean ) => void,

}
