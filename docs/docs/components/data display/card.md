import {CardHeader, IconButton, UIKitIcon} from "@amalgama/embassy-ui";
import CodePreview from '@site/src/components/CodePreview';
import ExampleCard from '@site/src/components/ExampleCard';

# Card

In this section you will find the `Card` component and it's subcomponents:
- [`CardHeader`](#cardheader)
- [`CardContent`](#cardcontent)
- [`CardActions`](#cardactions)
- [`CardMedia`](#cardmedia)

# Example
<CodePreview>
	 <ExampleCard />
</CodePreview>

```jsx
<Card>
	<CardHeader
		avatar={{ uri: 'https://tinyurl.com/mrkdr42d' }}
		title="Header"
		subtitle="Subheader"
		rightActions={[
			<IconButton
				as={UIKitIcon}
				name="more-vertical-outline"
				onPress={() => window.alert( 'more button pressed' )}
			/>
		]}
	/>
	<CardMedia>
		<Image
			source={{ uri: 'https://placekitten.com/500/500' }}
			width="100%"
			resizeMode="cover"
			aspectRatio={1.5}
		/>
	</CardMedia>
	<CardContent>
		<Text variant="sh">Title</Text>
		<Text variant="body">Subhead</Text>
		<Text variant="body" paddingTop="2">
			Keep smiling, because life is a beautiful thing
			and there's so much to smile about.
		</Text>
	</CardContent>
	<CardActions>
		<Button variant="primary" py="2.5">Action 1</Button>
		<Button variant="secondary" py="2.5">Action 2</Button>
	</CardActions>
</Card>
```

## Card

The `Card` component is a container for other components. It has some padding and a `border-radius` by default.

### Props
The `Card` component accepts the same props as the [`Box`](/docs/components/layout/box) component.


## CardHeader

The `CardHeader` component is a container for the header of a `Card` component. 

### Props
Besides the props accepted by the [`HStack`](/docs/components/layout/Stack) component, the `CardHeader` component accepts the following props:

#### avatar
The avatar source to show at left side of the header.

| TYPE   | REQUIRED |
| ------ | -------- |
| [AvatarProps['source']](./avatar.md#source) | No       |

<CodePreview>
	 <CardHeader
	 	bg="bg-secondary-enabled-light"
		width={327}
		avatar={{ uri: 'https://placekitten.com/200/200' }}
		title="Header"
		subtitle="Subheader"
	/>
</CodePreview>

```jsx
<CardHeader
	bg="bg-secondary-enabled-light"
	width={327}
	avatar={{ uri: 'https://placekitten.com/200/200' }}
	title="Header"
	subtitle="Subheader"
/>
```

:::caution
If no `avatar` is provided then no avatar will be shown.
:::

#### title

The title prop to show on the header

| TYPE   | REQUIRED |
| ------ | -------- |
| `string` | No       |

<CodePreview>
	<CardHeader
		avatar={{ uri: 'https://placekitten.com/200/200' }}
		bg="bg-secondary-enabled-light"
		width={327}
		title="Other title text"
		subtitle="Subheader"
	/>
</CodePreview>

```jsx
<CardHeader
	avatar={{ uri: 'https://placekitten.com/200/200' }}
	bg="bg-secondary-enabled-light"
	width={327}
	title="Other title text"
	subtitle="Subheader"
/>
```

#### subtitle

The subtitle prop to show on the header

| TYPE   | REQUIRED |
| ------ | -------- |
| `string` | No       |

<CodePreview>
	 <CardHeader
		width={327}
		bg="bg-secondary-enabled-light"
		avatar={{ uri: 'https://placekitten.com/200/200' }}
		title="Header"
		subtitle="Other subtitle text"
	 />
</CodePreview>

```jsx
<CardHeader
	avatar={{ uri: 'https://placekitten.com/200/200' }}
	bg="bg-secondary-enabled-light"
	width={327} 
	title="Header"
	subtitle="Other subtitle text"
/>
```

#### rightActions

The actions to show on the right side of the header

| TYPE   | REQUIRED |
| ------ | -------- |
| `ReactNode[]` | No       |

<CodePreview>
	<CardHeader
		width={327}
		bg="bg-secondary-enabled-light"
		avatar={{ uri: 'https://placekitten.com/200/200' }}
		title="Header"
		subtitle="Subheader"
		rightActions={[
			<IconButton 
				as={UIKitIcon} 
				name="more-vertical-outline" 
				onPress={() => window.alert( 'More button pressed' )} 
			/>
		]} 
	/>
</CodePreview>

```jsx
<CardHeader
	width={327}
	bg="bg-secondary-enabled-light"
	avatar={{ uri: 'https://placekitten.com/200/200' }}
	title="Header"
	subtitle="Subheader"
	rightActions={[
		<IconButton 
			as={UIKitIcon} 
			name="more-vertical-outline" 
			onPress={() => window.alert( 'More button pressed' )} 
		/>
	]} 
/>
```
### Pseudo Props

#### __avatar
The style props to be applied to the internal avatar component

| Type      | Required |
| --------- | -------- |
| IBoxprops | No       |

<CodePreview>
	<CardHeader
		width={327}
		bg="bg-secondary-enabled-light"
		avatar={{ uri: 'https://placekitten.com/200/200' }}
		title="Header"
		subtitle="Subheader"
		__avatar={{
			borderWidth:"xs",
			margin: "-0.5",
			borderColor:"success.500",
		}}
	/>
</CodePreview>

```jsx
<CardHeader
	width={327}
	bg="bg-secondary-enabled-light"
	avatar={{ uri: 'https://placekitten.com/200/200' }}
	title="Header"
	subtitle="Subheader"
	__avatar={{
		borderWidth:"xs",
		margin: "-0.5",
		borderColor:"success.500",
	}}
/>
```

### __infoContainer
The style props to be applied to the box that contains the avatar, title and subtitle.

| Type      | Required |
| --------- | -------- |
| IBoxprops | No       |

<CodePreview>
	<CardHeader
		width={327}
		bg="bg-secondary-enabled-light"
		avatar={{ uri: 'https://placekitten.com/200/200' }}
		title="Header"
		subtitle="Subheader"
		__infoContainer={{
			borderWidth: 'xs',
			borderColor: "success.500"
		}}
	/>
</CodePreview>

```jsx
<CardHeader
	width={327} 
	bg="bg-secondary-enabled-light"
	avatar={{ uri: 'https://placekitten.com/200/200' }}
	title="Header"
	subtitle="Subheader"
	__infoContainer={{
		borderWidth: 'xs',
		borderColor: "success.500"
	}}
/>
```

### __rightActionsContainer
The style props to be applied to the box that contains the right actions.

| Type      | Required |
| --------- | -------- |
| IBoxprops | No       |

<CodePreview>
	<CardHeader
		width={327} 
		bg="bg-secondary-enabled-light"
		avatar={{ uri: 'https://placekitten.com/200/200' }}
		title="Header"
		subtitle="Subheader"
		rightActions={[
			<IconButton 
					name="more-vertical-outline" 
					as={UIKitIcon} 
					onPress={() => window.alert("more button pressed!")} 
			/>
		]}
		__rightActionsContainer={{
			borderWidth: 'xs',
			borderColor: "success.500"
		}}
	/>
</CodePreview>

```jsx
<CardHeader
	width={327} 
	bg="bg-secondary-enabled-light"
	avatar={{ uri: 'https://placekitten.com/200/200' }} 
	title="Header"
	subtitle="Subheader"
	rightActions={[
		<IconButton 
				name="more-vertical-outline" 
				as={UIKitIcon} 
				onPress={() => window.alert("more button pressed!")} 
		/>
	]}
	__rightActionsContainer={{
		borderWidth: 'xs',
		borderColor: "success.500"
	}}
/>
```

### __title
The style props to be applied to the title text.

| Type      | Required |
| --------- | -------- |
| ITextProps | No       |

<CodePreview>
	<CardHeader
		width={327} 
		bg="bg-secondary-enabled-light"
		avatar={{ uri: 'https://placekitten.com/200/200' }} 
		title="Header"
		subtitle="Subheader"
		__title={{
			color: 'text-success',
			font: 'Epilogue',
			fontWeight: 'semi-bold'
		}}
	/>
</CodePreview>

```jsx
<CardHeader
	width={327} 
	bg="bg-secondary-enabled-light"
	avatar={{ uri: 'https://placekitten.com/200/200' }} 
	title="Header"
	subtitle="Subheader"
	__title={{
		color: 'text-success',
		font: 'Epilogue',
		fontWeight: 'semi-bold'
	}}
/>
```


### __subtitle
The style props to be applied to the subtitle text.

| Type      | Required |
| --------- | -------- |
| ITextProps | No       |

<CodePreview>
	<CardHeader
		width={327} 
		bg="bg-secondary-enabled-light"
		avatar={{ uri: 'https://placekitten.com/200/200' }} 
		title="Header"
		subtitle="Subheader"
		__subtitle={{
			color: 'text-success',
			fontSize: 'xs',
			fontWeight: 'light'
		}}
	/>
</CodePreview>

```jsx
<CardHeader
	width={327} 
	bg="bg-secondary-enabled-light"
	avatar={{ uri: 'https://placekitten.com/200/200' }} 
	title="Header"
	subtitle="Subheader"
	__subtitle={{
		color: 'text-success',
		fontSize: 'xs',
		fontWeight: 'light'
	}}
/>
```

## CardContent
The `CardContent` component is a container for the content of a `Card` component.

### Props
The props accepted by the `CardContent` component are the same as the [`VStack`](/docs/components/layout/stack) component.

## CardActions
The `CardActions` component is a container for the actions of a `Card` component.

### Props
The props accepted by the `CardActions` component are the same as the [`HStack`](/docs/components/layout/stack) component.

## CardMedia
The `CardMedia` component is a container for the media of a `Card` component.

### Props
The props accepted by the `CardMedia` component are the same as the [`Box`](/docs/components/layout/box) component.

