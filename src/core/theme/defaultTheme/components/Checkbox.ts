export default {
	defaultProps: {
		height: 32,
		width: 32,
		justifyContent: 'center',
		alignItems: 'center',
		rounded: 'full',
		__selected: {
			__icon: { color: 'secondary.900' },
			borderColor: 'secondary.900'
		},
		__unselected: {
			__icon: { color: 'neutral.800' },
			borderColor: 'neutral.800'
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
		},
		__focus: {
			bg: 'secondary.10',
			borderWidth: '5',
			borderColor: 'secondary.900'
		},
		__icon: { }
	}
};
