export default {
	defaultProps: {
		backgroundColor: 'secondary.300',
		borderRadius: '3xl',
		borderWidth: 'xs',
		borderColor: 'transparent',
		__stack: {
			paddingY: 1.5,
			paddingX: 3
		},
		__label: {
			color: 'primary.900',
			variant: 'small-bold'
		},
		__disabled: {
			backgroundColor: 'primary.50',
			__label: {
				color: 'neutral.200'
			}
		},
		__pressed: {
			backgroundColor: 'neutral.50'
		},
		__hovered: {
			backgroundColor: 'neutral.50'
		},
		__selected: {
			borderColor: 'primary.900'
		}
	}
};
