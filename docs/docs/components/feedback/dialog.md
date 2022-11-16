import { Dialog, IconButton, Icon, Button, HStack, VStack, Box } from '@amalgama/embassy-ui'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CodePreview from '@site/src/components/CodePreview';
import { DialogHighPriority, DialogLowPriority, DialogFullyCustomizable } from '@site/src/components/ExampleDialog';

# Dialog

## Included components

- **Dialog:** Provides context and state for the dialog.
- **Dialog.Header:** Header section. Contains the title of the message and the icon.
- **Dialog.Body:** Body section. Contains the description of the message.
- **Dialog.Footer:** Footer section. Contains the actions of the dialog.

## Import

To add the `Dialog` component to your project you can import it as follows:

```tsx
import { Dialog } from '@amalgama/embassy-ui';
```

## Example

<CodePreview>
	<DialogLowPriority />
</CodePreview>

```jsx
import { useState } from 'react';
import { VStack, Text, Box, Button, Dialog, HStack } from '@amalgama/embassy-ui';

const Example = () => {
	const [ isModalVisible, setIsModalVisible ] = useState( false );

	return (
		<VStack>
			<Box flex={1} justifyContent="center">
				<Button
					onPress={() => setIsModalVisible( true )}
					borderWidth={0} textAlign="center"
				>
					Dialog Example
				</Button>
			</Box>

			<Dialog
				isVisible={isModalVisible}
				onClosePress={() => setIsModalVisible( false )}
			>
				<Dialog.Header title="Header title" />

				<Dialog.Body>
					<Text variant="body" textAlign="center" fontWeight="medium">
						Are you sure you want to leave?
					</Text>
					<Text variant="body" textAlign="center">
						All the changes saved will {'\n'} be discarded
					</Text>
				</Dialog.Body>

				<Dialog.Footer>
					<HStack space={8} marginBottom={5} marginTop={5} alignItems="center">
						<Button
							onPress={() => setIsModalVisible( false )}
							variant="secondary"
							width={110}
							padding={2}
							bg="transparent"
						>
							No
						</Button>

						<Button
							onPress={() => setIsModalVisible( false )}
							variant="primary"
							width={110}
							padding={2}
						>
							Yes
						</Button>
					</HStack>
				</Dialog.Footer>
			</Dialog>
	</VStack> )
}
```

## Dialog Props

### icon
An icon to show on the header of the Dialog.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ReactElement<IIconProps>` | No       |

<CodePreview>
	<DialogLowPriority icon={<Icon name="earth-outline" as={Ionicons} />} titleText="Custom icon" buttonText="Dialog with custom icon" />
</CodePreview>

```jsx
<Dialog
	icon={<Icon name="earth-outline" as={Ionicons} />}
	isVisible
>
	<Dialog.Header title="Custom icon" />
	<Dialog.Footer />
</Dialog>
```

### variant
The variant style to use. You can add more variants extending the theme configuration for this component.

The available variants are:

- `low-priority`
- `high-priority`

<CodePreview>
	<DialogLowPriority buttonText="Dialog - Low Priority" titleText="Dialog Low Priority" />
	<Box height={20} />
	<DialogHighPriority buttonText="Dialog - High Priority" titleText="Dialog High Priority" />
</CodePreview>

```jsx
<Dialog variant="low-priority">
	<Dialog.Header title="Dialog Low Priority" />
	<Dialog.Footer />
</Dialog>

<Dialog variant="high-priority">
	<Dialog.Header title="Dialog High Priority" />
	<Dialog.Footer />
</Dialog>
```

### onClosePress
A callback that is called when the dialog's close icon is pressed.

| TYPE   | REQUIRED |
| ------ |----------|
| `(): void` | No       |

:::info
The delete icon is only shown when this prop is not `undefined` nor `null`.
:::

<CodePreview>
	<DialogLowPriority onClosePress={() => alert("On close pressed")} />
</CodePreview>

```jsx
<Dialog onClosePress={() => alert("On close pressed")}>
	<Dialog.Header title="Header title" />
</Dialog>
```

### closeIcon
The icon used as the delete icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ReactElement<IIconProps>` | No       |

:::info
Remember that the close icon is only shown when the `onClosePress` prop is not `undefined` nor `null`.
:::

<CodePreview>
	<DialogLowPriority
		closeIcon={<Icon name="trash-outline" as={Ionicons} />}
		titleText="Custom close icon"
		buttonText="Dialog with custom close icon"
	/>
</CodePreview>

```jsx
<Dialog closeIcon={<Icon name="trash-outline" as={Ionicons} />}>
	<Dialog.Header title="Custom close icon" />
</Dialog>
```

### isVisible
If the dialog is visible or not.

| TYPE    | REQUIRED | DEFAULT |
|---------| -------- |---------|
| `Boolean` | No       | true    |

```tsx
<Dialog isVisible={true}>
	<Dialog.Header title="Header title" />
</Dialog>

<Dialog isVisible={false}>
	<Dialog.Header title="Header title" />
</Dialog>
```

### withIcon
If the icon is visible or not.

| TYPE    | REQUIRED | DEFAULT |
|---------| -------- |---------|
| `Boolean` | No     | true    |

<CodePreview>
	<DialogLowPriority withIcon={true} titleText="Dialog with icon" buttonText="Dialog with icon" />
</CodePreview>

```tsx
<Dialog withIcon={true}>
	<Dialog.Header title="Dialog with icon" />
</Dialog>
```

<CodePreview>
	<DialogLowPriority withIcon={false} titleText="Dialog without icon" buttonText="Dialog without icon" />
</CodePreview>

```tsx

<Dialog withIcon={false}>
	<Dialog.Header title="Dialog without icon" />
</Dialog>
```

:::info
The icon is only shown when the variant prop is a valid variant or when an icon prop is provided and this prop is not `false`.
:::

### react-native-modal
Under the hood the `Dialog` component use `react-native-modal` library. So, you can use all the props that `react-native-modal` allows.
You can find all the props [here](https://github.com/react-native-modal/react-native-modal#available-props).

### Available `react-native-modal` props

| Name                             | Type                 | Default                        | Description                                                                                                                                |
| -------------------------------- | -------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `animationIn`                    | `string` or `object` | `"slideInUp"`                    | Modal show animation                                                                                                                       |
| `animationInTiming`              | `number`             | `300`                            | Timing for the modal show animation (in ms)                                                                                                |
| `animationOut`                   | `string` or `object` | `"slideOutDown"`                 | Modal hide animation                                                                                                                       |
| `animationOutTiming`             | `number`             | `300`                            | Timing for the modal hide animation (in ms)                                                                                                |
| `avoidKeyboard`                  | `bool`               | `false`                          | Move the modal up if the keyboard is open                                                                                                  |
| `coverScreen`                    | `bool`               | `true`                           | Will use RN `Modal` component to cover the entire screen wherever the modal is mounted in the component hierarchy                          |
| `hasBackdrop`                    | `bool`               | `true`                           | Render the backdrop                                                                                                                        |
| `backdropColor`                  | `string`             | `"black"`                        | The backdrop background color                                                                                                              |
| `backdropOpacity`                | `number`             | `0.70`                           | The backdrop opacity when the modal is visible                                                                                             |
| `backdropTransitionInTiming`     | `number`             | `300`                            | The backdrop show timing (in ms)                                                                                                           |
| `backdropTransitionOutTiming`    | `number`             | `300`                            | The backdrop hide timing (in ms)                                                                                                           |
| `customBackdrop`                 | `node`               | `null`                           | The custom backdrop element                                                                                                                |
| `deviceHeight`                   | `number`             | `null`                           | Device height (useful on devices that can hide the navigation bar)                                                                         |
| `deviceWidth`                    | `number`             | `null`                           | Device width (useful on devices that can hide the navigation bar)                                                                          |
| `onBackButtonPress`              | `func`               | `() => null`                     | Called when the Android back button is pressed                                                                                             |
| `onBackdropPress`                | `func`               | `() => null`                     | Called when the backdrop is pressed                                                                                                        |
| `onModalWillHide`                | `func`               | `() => null`                     | Called before the modal hide animation begins                                                                                              |
| `onModalHide`                    | `func`               | `() => null`                     | Called when the modal is completely hidden                                                                                                 |
| `onModalWillShow`                | `func`               | `() => null`                     | Called before the modal show animation begins                                                                                              |
| `onModalShow`                    | `func`               | `() => null`                     | Called when the modal is completely visible                                                                                                |
| `onSwipeStart`                   | `func`               | `() => null`                     | Called when the swipe action started                                                                                                       |
| `onSwipeMove`                    | `func`               | `(percentageShown) => null`      | Called on each swipe event                                                                                                                 |
| `onSwipeComplete`                | `func`               | `({ swipingDirection }) => null` | Called when the `swipeThreshold` has been reached                                                                                          |
| `onSwipeCancel`                  | `func`               | `() => null`                     | Called when the `swipeThreshold` has not been reached                                                                                      |
| `panResponderThreshold`          | `number`             | `4`                              | The threshold for when the panResponder should pick up swipe events                                                                        |
| `scrollOffset`                   | `number`             | `0`                              | When > 0, disables swipe-to-close, in order to implement scrollable content                                                                |
| `scrollOffsetMax`                | `number`             | `0`                              | Used to implement overscroll feel when content is scrollable. See `/example` directory                                                     |
| `scrollTo`                       | `func`               | `null`                           | Used to implement scrollable modal. See `/example` directory for reference on how to use it                                                |
| `scrollHorizontal`               | `bool`               | `false`                          | Set to true if your scrollView is horizontal (for a correct scroll handling)                                                               |
| `swipeThreshold`                 | `number`             | `100`                            | Swiping threshold that when reached calls `onSwipeComplete`                                                                                |
| `swipeDirection`                 | `string` or `array`  | `null`                           | Defines the direction where the modal can be swiped. Can be 'up', 'down', 'left, or 'right', or a combination of them like `['up','down']` |
| `useNativeDriver`                | `bool`               | `false`                          | Defines if animations should use native driver                                                                                             |
| `useNativeDriverForBackdrop`     | `bool`               | `null`                           | Defines if animations for backdrop should use native driver (to avoid flashing on android)                                                 |
| `hideModalContentWhileAnimating` | `bool`               | `false`                          | Enhances the performance by hiding the modal content until the animations complete                                                         |
| `propagateSwipe`                 | `bool` or `func`     | `false`                          | Allows swipe events to propagate to children components (eg a ScrollView inside a modal)                                                   |

## Dialog.Header Props

### title
The title text to show on the Header Section.

| TYPE   | REQUIRED |
| ------ | -------- |
| `string` | No       |

```tsx

<Dialog>
	<Dialog.Header title="Header title" />
</Dialog>
```

## Dialog Pseudo Props

### __title

Props to be applied to the internal `text` component showing the label text.

| TYPE   | REQUIRED |
| ------ | -------- |
| `ITextProps` | No  |

### __header

Props to be applied to the internal `box` component that contains the header section.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IBoxProps` | No  |

### __body

Props to be applied to the internal `box` component that contains the body section.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IBoxProps` | No  |

### __footer

Props to be applied to the internal `box` component that contains the footer section.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IBoxProps` | No  |

### __closeButtonContainer

Props to be applied to the internal `box` component that contains the close button icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IBoxProps` | No  |

### __icon

Props to be applied to the internal `icon` component.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No  |

### __closeIcon

Props to be applied to the internal close `icon` component.

| TYPE   | REQUIRED |
| ------ | -------- |
| `IIconProps` | No  |

## Fully customizable example

<CodePreview>
	<DialogFullyCustomizable />
</CodePreview>

```tsx

<Dialog
	isVisible
	variant="high-priority"
	icon={<Icon name="circle" as={UIKitIcon} />}
	closeIcon={<Icon name="alert-triangle" as={UIKitIcon} />}
	backdropOpacity={0.5}
	animationInTiming={1000}
	animationIn="swing"
	bg="primary.300"
	__icon={{ size: '2xl' }}
	__closeIcon={{ color: 'white' }}
	__title={{ color: 'error.900' }}
>
	<Dialog.Header title="Dialog fully customizable" />

	<Dialog.Body>
		<Text variant="body" textAlign="center" color="white" fontWeight="bold">
			Are you sure you want to leave?
		</Text>
		<Text variant="body" textAlign="center" color="white">
			All the changes saved will {'\n'} be discarded
		</Text>
	</Dialog.Body>

	<Dialog.Footer>
		<HStack space={8} marginBottom={5} marginTop={5} alignItems="center">

			<Button
				variant="secondary"
				onPress={() => setIsModalVisible( false )}
				width={110}
				bg="transparent"
				padding={4}
				__label={{ color: 'white' }}
				borderColor="white"
			>
				No
			</Button>

			<Button
				variant="priority"
				onPress={() => setIsModalVisible( false )}
				width={110}
				padding={4}
			>
				Yes
			</Button>
		</HStack>
	</Dialog.Footer>
</Dialog>
```

## Available animations
Take a look at [`react-native-animatable`](https://github.com/oblador/react-native-animatable) to see the dozens of animations available out-of-the-box. You can also pass in custom animation definitions and have them automatically register with `react-native-animatable`. For more information on creating custom animations, see the react-native-animatable [animation definition schema](https://github.com/oblador/react-native-animatable#animation-definition-schema).
