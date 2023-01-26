import { Platform } from 'react-native';

export default {
	defaultProps: {
		height: 56,
		borderWidth: 'xs',
		borderRadius: 'md',
		borderColor: 'neutral.600',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 0.25,
		placeholderTextColor: 'neutral.200',
		__textInput: {
			flexGrow: 1,
			padding: 4,
			color: 'neutral.600',
			...(
				Platform.OS === 'web'
					? { outlineStyle: 'none' }
					: {}
			)
		},
		__icon: {
			size: 'sm',
			color: 'neutral.600',
			marginRight: 2,
			padding: 2
		},
		__disabled: {
			borderColor: 'transparent',
			bg: 'neutral.50',
			__textInput: { color: 'neutral.200' },
			__icon: { color: 'neutral.200' }
		},
		__error: {
			borderColor: 'error.500'
		},
		__focused: {
			borderWidth: 'sm',
			borderColor: 'primary.700',
			padding: 0,
			__textInput: { color: 'neutral.900' },
			__icon: { color: 'neutral.900' }
		}
	}
};
