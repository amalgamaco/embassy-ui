import { Image } from '@amalgamaco/embassy-ui'
import CodePreview from '@site/src/components/CodePreview';

# Image

The image component used to display images.

:::caution
For images to work is necessary to specify the dimensions of the image using the `width` and `height` props.
:::

## Include

```jsx
include { Image } from "@amalgamaco/embassy-ui"
```

## Example
<CodePreview>
	<Image
		source={{uri:"https://placekitten.com/200/300"}}
		width={200}
		height={300}
	/>
</CodePreview>

```jsx
<Image
	source={{uri:"https://placekitten.com/200/300"}}
	width={200}
	height={300}
/>
```


## Props
:::info
This component supports all the props of the Image component from [react-native](https://reactnative.dev/docs/image#props)
:::

### source
The image source (either a remote URL or a local file resource).

This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best uri to display based on the measured size of the image container. A cache property can be added to control how networked request interacts with the local cache. (For more information see Cache Control for Images).

The currently supported formats are png, jpg, jpeg, bmp, gif, webp, psd (iOS only). In addition, iOS supports several RAW image formats. Refer to Apple's documentation for the current list of supported camera models (for iOS 12, see https://support.apple.com/en-ca/HT208967).

| Type        | Required | 
| ----------- | -------- | 
| [ImageSource](https://reactnative.dev/docs/image#imagesource) | true     |

### resizeMode

Determines how to resize the image when the frame doesn't match the raw image dimensions. Defaults to cover.

- `cover`: Scale the image uniformly (maintain the image's aspect ratio) so that 
	- both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
	- at least one dimension of the image will be equal to or larger than the corresponding dimension of the view (minus padding).

- `contain`: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).

- `stretch`: Scale width and height independently, This may change the aspect ratio of the src.

- `repeat`: Repeat the image to cover the frame of the view. The image will keep it's size and aspect ratio. (iOS only)

- `center`: Center the image in the view. The image will not be scaled.

| Type                                                    | Required |
| ------------------------------------------------------- | -------- |
| enum('cover', 'contain', 'stretch', 'repeat', 'center') | false    |
