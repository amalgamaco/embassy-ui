export default {
	defaultProps: {
		height: 32,
		width: 32,
		justifyContent: 'center',
		alignItems: 'center',
		rounded: 'full',
		__icon: {
		},
		__selected: {
			color: 'secondary.900',
			borderColor: 'secondary.900'
		},
		__unselected: {
			color: 'neutral.800',
			borderColor: 'neutral.800'
		},
		__indeterminate: {
			color: 'secondary.900',
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
			borderWidth: '1'
		}
	}
};
