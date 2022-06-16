import type { IBoxProps } from '../Box/types';

export interface IStackProps extends IBoxProps {
	direction: 'row' | 'column',
	space?: IBoxProps[ 'margin' ],
	reversed?: boolean
}

export type IHStackProps = Omit<IStackProps, 'direction'>;
export type IVStackProps = Omit<IStackProps, 'direction'>;
