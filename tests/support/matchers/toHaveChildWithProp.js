const hasChildWithProp = ( element, prop, value ) => (
	element.children.find(
		child => child.props[ prop ] === value || hasChildWithProp( child, prop, value )
	) !== undefined
);

expect.extend( {
	toHaveChildWithProp( receivedElement, prop, expectedValue ) {
		return {
			pass: hasChildWithProp( receivedElement, prop, expectedValue ),
			message: `Expected element to have a child with a prop "${prop}" with value ${expectedValue}`
		};
	}
} );
