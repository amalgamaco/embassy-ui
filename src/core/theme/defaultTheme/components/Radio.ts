export default {
	defaultProps: {
		flexShrink: 1,
		outlineStyle: 'none',
		__icon: {
			size: 'sm',
			color: 'neutral.800',
			borderColor: 'neutral.800'
		},
		__iconContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			padding: '1.5',
			rounded: 'full'
		},
		__label: {
			variant: 'body',
			color: 'neutral.800'
		},
		__disabled: {
			__icon: {
				color: 'neutral.600'
			}
		},
		__selected: {
			__icon: {
				color: 'secondary.900'
			}
		},
		__pressed: {
			__iconContainer: { bg: 'secondary.50' }
		},
		__hovered: {
			__iconContainer: { bg: 'secondary.50' }
		}
	}
};
