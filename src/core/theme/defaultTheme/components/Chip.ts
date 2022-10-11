export default {
	defaultProps: {
		backgroundColor: 'neutral.50',
		borderRadius: '3xl',
		borderWidth: 'xs',
		borderColor: 'transparent',
		__stack: {
			flex: 1,
			paddingY: 1.5,
			alignItems: 'center',
			paddingX: 3
		},
		__label: {
			color: 'primary.900',
			variant: 'small-bold'
		},
		__icon: {
			size: 'xs',
			marginRight: '2',
			color: 'primary.900'
		},
		__deleteIcon: {
			size: 'xs',
			marginLeft: '2',
			color: 'primary.900',
			padding: 0.5,
			marginY: -0.5,
			borderRadius: 'full',
			__pressed: {
				opacity: 1,
				bg: 'secondary.300'
			},
			__hovered: {
				bg: 'secondary.300'
			}
		},
		__disabled: {
			backgroundColor: 'primary.50',
			__label: {
				color: 'neutral.200'
			},
			__icon: {
				color: 'neutral.200'
			}
		},
		__pressed: {
			backgroundColor: 'secondary.300'
		},
		__hovered: {
			backgroundColor: 'secondary.300'
		},
		__selected: {
			backgroundColor: 'secondary.300',
			borderColor: 'primary.900'
		}
	}
};
