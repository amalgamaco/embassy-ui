import { createContext } from 'react';
import type { IDialogContext } from './types';

export const DialogContext = createContext<IDialogContext>( {} );
