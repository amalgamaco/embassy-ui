export default {
	defaultProps: {
		flex: 1,
		bg: 'white',
		borderColor: 'black',
		borderWidth: '2',
		rounded: '2xl',
		padding: '3.5',
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
			bg: 'primary.900',
			borderColor: 'primary.900',
			__label: {
				color: 'white',
				fontWeight: 'bold',
				fontSize: 'sm',
				lineHeight: 'sm'
			},
			__leftIcon: {
				color: 'white'
			},
			__rightIcon: {
				color: 'white'
			},
			__pressed: {
				opacity: 1,
				bg: 'primary.800',
				borderColor: 'primary.800'
			},
			__disabled: {
				opacity: 1,
				bg: 'primary.400',
				borderColor: 'primary.400'
			}
		},
		secondary: {
			bg: 'white',
			borderWidth: '2',
			borderColor: 'primary.900',
			__label: {
				color: 'primary.900',
				fontWeight: 'bold',
				fontSize: 'sm',
				lineHeight: 'sm'
			},
			__leftIcon: {
				color: 'primary.900'
			},
			__rightIcon: {
				color: 'primary.900'
			},
			__pressed: {
				opacity: 1,
				bg: 'primary.10'
			},
			__disabled: {
				opacity: 1,
				bg: 'white',
				borderColor: 'primary.400',
				__label: {
					color: 'primary.400'
				},
				__leftIcon: {
					color: 'primary.400'
				},
				__rightIcon: {
					color: 'primary.400'
				}
			}
		},
		priority: {
			bg: 'error.900',
			borderWidth: 'error.900',
			__label: {
				color: 'white',
				fontWeight: 'bold',
				fontSize: 'sm',
				lineHeight: 'sm'
			},
			__leftIcon: {
				color: 'white'
			},
			__rightIcon: {
				color: 'white'
			},
			__pressed: {
				opacity: 1,
				bg: 'error.700',
				borderColor: 'error.700'
			},
			__disabled: {
				opacity: 1,
				bg: 'error.400',
				borderColor: 'error.400'
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
