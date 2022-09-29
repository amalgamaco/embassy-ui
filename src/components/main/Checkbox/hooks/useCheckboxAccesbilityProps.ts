import { useMemo } from 'react';
import { Platform } from 'react-native';

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
		},
		...( Platform.OS === 'web'
			? { accessibilityChecked: indeterminated ? 'mixed' : selected }
			: {} )

	} ),
	[ label, selected, indeterminated, disabled ]
);

export default useCheckboxAccessibilityProps;
