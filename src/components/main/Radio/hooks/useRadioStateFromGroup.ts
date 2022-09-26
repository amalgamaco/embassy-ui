import { useRadioGroupContext } from '../context';

const useRadioStateFromGroup = ( value?: string ) => {
	const context = useRadioGroupContext();
	if ( !context ) { return null; }

	if ( !value ) {
		throw new Error( 'A Radio inside a RadioGroup must have a value assgined.' );
	}

	const { disabled, selectedValue, onRadioPress } = context;

	return ( {
		disabled,
		selected: selectedValue === value,
		onPress: () => onRadioPress( value )
	} );
};

export default useRadioStateFromGroup;
