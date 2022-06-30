export default {
	defaultProps: {
		flex: 1,
		bg: 'white',
		borderColor: 'black',
		borderWidth: '2',
		rounded: '2xl',
		padding: '3',
		width: '100%',
		__stack: {
			width: '100%'
		},
		__label: {
			flex: 1,
			color: 'black',
			textAlign: 'center' as const
		},
		__disabled: {
			opacity: 0.7
		},
		__pressed: {
			opacity: 0.7
		}
	},
	variants: {
		primary: {
			bg: 'primary.200',
			borderWidth: '0',
			__label: {
				color: 'white',
				fontWeight: 'bold',
				fontSize: 'md',
				lineHeight: 'md',
				letterSpacing: '2xl'
			}
		},
		secondary: {
			bg: 'white',
			borderWidth: '2',
			borderColor: 'primary.200',
			__label: {
				color: 'primary.200',
				fontWeight: 'bold',
				fontSize: 'md',
				lineHeight: 'md',
				letterSpacing: '2xl'
			}
		},
		danger: {
			bg: 'error.700',
			borderWidth: '0',
			__label: {
				color: 'white',
				fontWeight: 'bold',
				fontSize: 'md',
				lineHeight: 'md',
				letterSpacing: '2xl'
			}
		},
		success: {
			bg: 'success.700',
			borderWidth: '0',
			__label: {
				color: 'white',
				fontWeight: 'bold',
				fontSize: 'md',
				lineHeight: 'md',
				letterSpacing: '2xl'
			}
		}
	}
};
