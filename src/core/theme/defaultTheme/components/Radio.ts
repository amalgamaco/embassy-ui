export default {
	defaultProps: {
		height: 32,
		width: 32,
		justifyContent: 'center',
		alignItems: 'center',
		rounded: 'full',
		outlineStyle: 'none',
		__icon: {
			color: 'neutral.800',
			size: 'sm'
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
			backgroundColor: 'secondary.50'
		},
		__hovered: {
			backgroundColor: 'secondary.50'
		},
		__focused: {
			borderWidth: '1',
			backgroundColor: 'secondary.50',
			borderColor: 'secondary.900'
		}

	}
};
