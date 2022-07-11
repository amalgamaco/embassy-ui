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
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center'
		},
		__label: {
			color: 'black',
			mx: 2,
			textAlign: 'center' as const
		},
		__leftIcon: {
			size: 'sm'
		},
		__rightIcon: {
			size: 'sm'
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
			},
			__leftIcon: {
				color: 'white'
			},
			__rightIcon: {
				color: 'white'
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
			},
			__leftIcon: {
				color: 'primary.200'
			},
			__rightIcon: {
				color: 'primary.200'
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
			},
			__leftIcon: {
				color: 'white'
			},
			__rightIcon: {
				color: 'white'
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
			},
			__leftIcon: {
				color: 'white'
			},
			__rightIcon: {
				color: 'white'
			}
		}
	}
};
