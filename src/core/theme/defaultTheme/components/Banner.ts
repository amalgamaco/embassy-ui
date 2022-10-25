export default {
	defaultProps: {
		bg: 'primary.100',
		borderLeftWidth: '4xl',
		padding: 3.5,
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1,
		__label: {
			fontSize: 'sm',
			color: 'neutral.900'
		},
		__labelContainer: {
			flex: 1
		},
		__icon: {
			color: 'neutral.900',
			marginRight: '2.5'
		},
		__deleteIcon: {
			color: 'neutral.900',
			marginLeft: '2.5'
		}
	},
	variants: {
		error: {
			bg: 'error.100',
			borderColor: 'error.700'
		},
		success: {
			bg: 'success.100',
			borderColor: 'success.700'
		},
		warning: {
			bg: 'warning.100',
			borderColor: 'warning.700'
		},
		information: {
			bg: 'information.100',
			borderColor: 'information.700'
		}
	}
};
