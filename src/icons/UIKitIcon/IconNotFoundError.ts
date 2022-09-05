export default class IconNotFoundError extends Error {
	constructor( iconName: string ) {
		super( `Icon ${iconName} not found in UIKitIcon` );
	}
}
