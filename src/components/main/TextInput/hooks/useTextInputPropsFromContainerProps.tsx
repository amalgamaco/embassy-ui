/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMemo } from 'react';
import { TEXT_INPUT_PROP_NAMES } from '../consts';

const useTextInputPropsFromContainerProps = (
	textInputProps: any, containerProps: any
) => useMemo(
	() => {
		TEXT_INPUT_PROP_NAMES.forEach( ( propName ) => {
			textInputProps[ propName ] = containerProps[ propName ];
			delete containerProps[ propName ];
		} );

		return { textInputProps, containerProps };
	},
	[ textInputProps, containerProps ]
);

export default useTextInputPropsFromContainerProps;
