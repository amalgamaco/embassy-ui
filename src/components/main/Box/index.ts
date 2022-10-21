/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BoxMain from './Box';
import AnimatedBox from './AnimatedBox';
import type { IBoxComponentType, IBoxAnimatedComponentType } from './types';

const Box = BoxMain as unknown as IBoxComponentType;
Box.Animated = AnimatedBox as IBoxAnimatedComponentType;

export default Box;
