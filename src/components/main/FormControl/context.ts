import { createContext, useContext } from 'react';
import type { IFormControlContext } from './types';

export const FormControlContext = createContext<IFormControlContext | null>(
	null
);

export const useFormControlContext = () => useContext( FormControlContext );
