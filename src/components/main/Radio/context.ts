import { createContext, useContext } from 'react';
import type { IRadioGroupContext } from './types';

export const RadioGroupContext = createContext<IRadioGroupContext | null>(
	null
);

export const useRadioGroupContext = () => useContext( RadioGroupContext );
