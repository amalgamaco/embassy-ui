import { useMemo } from 'react';

interface IUseCheckboxAccessibilityProps {
	label?: string,
	selected: boolean,
	indeterminated: boolean,
	disabled: boolean
}

const useCheckboxAccessibilityProps = ( {
	label,
	selected,
	indeterminated,
	disabled
}: IUseCheckboxAccessibilityProps ) => useMemo(
	() => ( {
		accessible: true,
		accessibilityRole: 'checkbox',
		accessibilityLabel: label,
		accessibilityState: {
			checked: indeterminated ? 'mixed' : selected,
			disabled
		}
	} ),
	[ label, selected, indeterminated, disabled ]
);

export default useCheckboxAccessibilityProps;
