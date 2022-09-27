import { Platform } from 'react-native';

export default {
	defaultProps: {
		height: 56,
		flex: 1,
		borderWidth: '1',
		borderRadius: 'lg',
		borderColor: 'neutral.600',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 0.25,
		__textInput: {
			flexGrow: 1,
			paddingY: 4,
			paddingX: 4,
			color: 'neutral.600',
			...(
				Platform.OS === 'web'
					? { outlineStyle: 'none' }
					: {}
			)
		},
		__icon: {
			color: 'neutral.600',
			paddingY: 4,
			marginRight: 4
		},
		__disabled: {
			borderColor: 'transparent',
			bg: 'neutral.50',
			__textInput: { color: 'neutral.200' },
			__icon: { color: 'neutral.200' }
		},
		__focused: {
			borderWidth: '2',
			borderColor: 'primary.700',
			padding: 0,
			__textInput: { color: 'neutral.900' },
			__icon: { color: 'neutral.900' }
		}
	}
};
