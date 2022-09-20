import { createContext, useContext } from 'react';
import type { ICheckboxContext } from './types';

export const CheckboxGroupContext = createContext<ICheckboxContext | null>(
	null
);

export const useCheckboxGroupContext = () => useContext( CheckboxGroupContext );
