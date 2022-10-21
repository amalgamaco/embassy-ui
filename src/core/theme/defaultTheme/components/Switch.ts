export default {
	defaultProps: {
		width: 52,
		height: 32,
		padding: '0.5',
		borderWidth: 'sm',
		borderColor: 'neutral.600',
		backgroundColor: 'secondary.50',
		rounded: '4xl',
		justifyContent: 'center',
		alignItems: 'flex-start',
		__switchContainer: {
			width: 60,
			height: 40,
			rounded: '4xl',
			justifyContent: 'center',
			alignItems: 'center'
		},
		__iconContainer: {
			width: 24,
			height: 24,
			rounded: 'full',
			backgroundColor: 'neutral.600',
			justifyContent: 'center',
			alignItems: 'center'
		},
		__icon: {
			size: '3xs',
			color: 'white'
		},
		__selected: {
			backgroundColor: 'secondary.900',
			borderColor: 'transparent',
			__iconContainer: {
				backgroundColor: 'white'
			},
			__icon: {
				color: 'secondary.900'
			}
		},
		__disabled: {
			__icon: {
				color: 'white'
			},
			backgroundColor: 'neutral.200',
			borderColor: 'neutral.600',
			opacity: 0.5,
			__iconContainer: {
				backgroundColor: 'neutral.600'
			}
		},
		__hovered: {
			__switchContainer: {
				backgroundColor: 'secondary.50'
			}
		},
		__pressed: {
			__switchContainer: {
				backgroundColor: 'secondary.50'
			}
		}
	}
};
