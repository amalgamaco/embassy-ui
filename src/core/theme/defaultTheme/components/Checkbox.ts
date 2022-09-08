export default {
	defaultProps: {
		height: 32,
		width: 32,
		justifyContent: 'center',
		alignItems: 'center',
		rounded: 'full',
		outlineStyle: 'none',
		borderColor: 'neutral.800',
		__icon: { color: 'neutral.800' },
		__selected: {
			__icon: { color: 'secondary.900' },
			borderColor: 'secondary.900'
		},
		__indeterminate: {
			__icon: { color: 'secondary.900' },
			borderColor: 'secondary.900'
		},
		__disabled: {
			opacity: 0.7
		},
		__pressed: {
			bg: 'secondary.10'
		},
		__hover: {
			bg: 'secondary.10'
		}
	}
};
