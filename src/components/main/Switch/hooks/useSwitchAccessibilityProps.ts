import { useMemo } from 'react';
import { Platform } from 'react-native';

interface IUseSwitchAccessibilityProps {
	label?: string,
	selected: boolean,
	disabled: boolean
}

const useSwitchAccessibilityProps = ( {
	label,
	selected,
	disabled
}: IUseSwitchAccessibilityProps ) => useMemo(
	() => ( {
		accessible: true,
		accessibilityRole: 'switch',
		accessibilityLabel: label,
		accessibilityState: { checked: selected, disabled },
		...( Platform.OS === 'web'
			? { accessibilityChecked: selected }
			: {} )

	} ),
	[ label, selected, disabled ]
);

export default useSwitchAccessibilityProps;
