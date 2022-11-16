export default {
	defaultProps: {
		bg: 'secondary.50',
		borderRadius: 'xl',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		__closeIcon: {
			color: 'neutral.900',
			size: 'xs'
		},
		__icon: {
			color: 'neutral.900',
			size: 'md',
			name: 'alert-circle',
			marginBottom: 2
		},
		__body: {
			justifyContent: 'center',
			alignItems: 'center'
		},
		__title: {
			color: 'neutral.900',
			fontSize: 'lg',
			fontWeight: 'medium'
		},
		__header: {
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 4,
			marginBottom: 4
		},
		__footer: {
			justifyContent: 'center',
			alignItems: 'center',
			padding: 2
		}
	},
	variants: {
		'low-priority': {
			__icon: {
				color: 'neutral.900'
			}
		},
		'high-priority': {
			__icon: {
				color: 'error.900'
			}
		}
	}
};
