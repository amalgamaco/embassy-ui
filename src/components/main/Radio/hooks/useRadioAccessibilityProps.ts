import { useMemo } from 'react';

interface IUseRadioAccessibilityProps {
	label?: string,
	selected: boolean,
	disabled: boolean
}

const useRadioAccessibilityProps = ( {
	label,
	selected,
	disabled
}: IUseRadioAccessibilityProps ) => useMemo(
	() => ( {
		accessible: true,
		accessibilityRole: 'radio',
		accessibilityLabel: label,
		accessibilityState: { checked: selected, disabled }
	} ),
	[ label, selected, disabled ]
);

export default useRadioAccessibilityProps;
