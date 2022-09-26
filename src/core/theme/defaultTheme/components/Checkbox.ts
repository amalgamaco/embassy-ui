export default {
	defaultProps: {
		flexShrink: 1,
		outlineStyle: 'none',
		__icon: {
			size: 'md',
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
		__selected: {
			__icon: {
				color: 'secondary.900',
				borderColor: 'secondary.900'
			}
		},
		__indeterminated: {
			__icon: {
				color: 'secondary.900',
				borderColor: 'secondary.900'
			}
		},
		__disabled: {
			opacity: 0.7
		},
		__pressed: {
			__iconContainer: { bg: 'secondary.10' }
		},
		__hovered: {
			__iconContainer: { bg: 'secondary.10' }
		}
	}
};
