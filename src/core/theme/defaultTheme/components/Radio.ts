export default {
	defaultProps: {
		flexShrink: 1,
		outlineStyle: 'none',
		__icon: {
			size: 'xs',
			color: 'neutral.600'
		},
		__iconContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			padding: '1.5',
			rounded: 'full'
		},
		__label: {
			variant: 'body',
			color: 'neutral.500'
		},
		__disabled: {
			__icon: {
				color: 'neutral.200'
			},
			__label: {
				color: 'neutral.200'
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
