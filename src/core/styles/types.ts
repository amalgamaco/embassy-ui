export interface Transformer {
	color: ( name: string ) => string | undefined
}

export type TransformerMethod = keyof Transformer;

export type PropName = string;
export type PropValue = string | number;
export type ComponentProps = Record<PropName, PropValue>

export type StylePropName = string;
export type StylePropValue = string | number | undefined;
export type Style = Record<StylePropName, StylePropValue>

export type PropMap = {
	property: StylePropName,
	transformerMethod: TransformerMethod
};
export type PropsMappingDict = Record<PropName, PropMap>;
