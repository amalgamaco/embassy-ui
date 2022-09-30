export default {
	defaultProps: {
		__label: {
			variant: 'small-bold',
			color: 'neutral.900'
		},
		__required: {
			variant: 'small-bold',
			color: 'error.500'
		},
		__hintText: {
			variant: 'small',
			color: 'neutral.600'
		},
		__errorText: {
			variant: 'small',
			color: 'neutral.600'
		},
		__errorIcon: {
			size: '2xs',
			color: 'error.500'
		},
		__disabled: {
			__hintText: {
				color: 'neutral.200'
			}
		}
	}
};
