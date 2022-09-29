import { useMemo } from 'react';

interface IUseFormControlAccessibilityProps {
    label?: string,
    hint?: string
}

const useFormControlAccessibilityProps = ( { label, hint }
    : IUseFormControlAccessibilityProps ) => useMemo(
	() => ( {
		accessible: true,
		accessibilityLabel: label,
		accessibilityHint: hint
	} ),
	[ label, hint ]
);

export default useFormControlAccessibilityProps;
