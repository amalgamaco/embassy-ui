import RadioMain from './Radio';
import RadioGroup from './RadioGroup';
import type { IRadioComponentType, IRadioGroupComponentType } from './types';

const Radio = RadioMain as unknown as IRadioComponentType;
Radio.Group = RadioGroup as IRadioGroupComponentType;

export default Radio;
