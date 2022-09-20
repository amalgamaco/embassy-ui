import { useCheckboxGroupContext } from '../context';

const useCheckboxStateFromGroup = ( value?: string ) => {
	const context = useCheckboxGroupContext();
	if ( !context ) { return null; }

	if ( !value ) {
		throw new Error( 'A Checkbox inside a CheckboxGroup must have a value assgined.' );
	}

	const { selectedValues, onCheckboxPress } = context;
	if ( !selectedValues && !onCheckboxPress ) { return null; }

	return ( {
		selected: selectedValues?.has( value ),
		onPress: () => onCheckboxPress( value )
	} );
};

export default useCheckboxStateFromGroup;
