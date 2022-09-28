export default {
	defaultProps: {
		bg: 'white',
		borderColor: 'black',
		borderWidth: '2',
		rounded: 'xl',
		padding: '3.5',
		width: '100%',
		height: 48,
		__stack: {
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center'
		},
		__label: {
			color: 'black',
			mx: 2,
			textAlign: 'center' as const,
			fontWeight: 'bold',
			fontSize: 'xs',
			lineHeight: 'xs'
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
			bg: 'primary.700',
			borderColor: 'primary.700',
			__label: {
				color: 'white'
			},
			__leftIcon: {
				color: 'white'
			},
			__rightIcon: {
				color: 'white'
			},
			__pressed: {
				opacity: 1,
				bg: 'primary.900',
				borderColor: 'primary.900'
			},
			__disabled: {
				opacity: 1,
				bg: 'primary.100',
				borderColor: 'primary.100',
				__label: {
					color: 'neutral.600'
				},
				__leftIcon: {
					color: 'neutral.600'
				},
				__rightIcon: {
					color: 'neutral.600'
				}
			}
		},
		secondary: {
			bg: 'white',
			borderWidth: 'sm',
			borderColor: 'primary.900',
			__label: {
				color: 'primary.900'
			},
			__leftIcon: {
				color: 'primary.900'
			},
			__rightIcon: {
				color: 'primary.900'
			},
			__pressed: {
				opacity: 1,
				bg: 'neutral.50'
			},
			__disabled: {
				opacity: 1,
				bg: 'white',
				borderColor: 'neutral.300',
				__label: {
					color: 'neutral.300'
				},
				__leftIcon: {
					color: 'neutral.300'
				},
				__rightIcon: {
					color: 'neutral.300'
				}
			}
		},
		priority: {
			bg: 'error.700',
			borderWidth: 'error.700',
			__label: {
				color: 'white'
			},
			__leftIcon: {
				color: 'white'
			},
			__rightIcon: {
				color: 'white'
			},
			__pressed: {
				opacity: 1,
				bg: 'error.900',
				borderColor: 'error.900'
			},
			__disabled: {
				opacity: 1,
				bg: 'error.200',
				borderColor: 'error.200'
			}
		},
		success: {
			bg: 'success.700',
			borderWidth: 'success.700',
			__label: {
				color: 'white'
			},
			__leftIcon: {
				color: 'white'
			},
			__rightIcon: {
				color: 'white'
			},
			__pressed: {
				opacity: 1,
				bg: 'success.900',
				borderColor: 'success.900'
			},
			__disabled: {
				opacity: 1,
				bg: 'success.200',
				borderColor: 'success.200'
			}
		}
	}
};
