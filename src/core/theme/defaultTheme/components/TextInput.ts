import { Platform } from 'react-native';

export default {
	defaultProps: {
		__container: {
			flex: 1,
			paddingY: Platform.OS === 'web' ? 4 : 0,
			paddingX: 4,
			borderWidth: '1',
			borderRadius: 'lg',
			borderColor: 'neutral.600',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		__textInput: {
			flexGrow: 1,
			color: 'neutral.600',
			outlineStyle: 'none'
		},
		__icon: { color: 'neutral.600' },
		__disabled: {
			__container: {
				borderWidth: '0',
				bg: 'neutral.50'
			},
			__textInput: { color: 'neutral.200' },
			__icon: { color: 'neutral.200' }
		},
		__focused: {
			__container: {
				borderWidth: '2',
				borderColor: 'primary.700'
			},
			__textInput: { color: 'neutral.900' },
			__icon: { color: 'neutral.900' }
		}
	}
};
