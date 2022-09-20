import CheckboxMain from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import type { ICheckboxComponentType, ICheckboxGroupComponentType } from './types';

const Checkbox = CheckboxMain as ICheckboxComponentType;
Checkbox.Group = CheckboxGroup as ICheckboxGroupComponentType;

export default Checkbox;
