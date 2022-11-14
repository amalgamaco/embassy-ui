import { HStack, Avatar } from '@amalgama/embassy-ui'
import CodePreview from '@site/src/components/CodePreview';

# Avatar

This component is used to display a user's profile picture.

To add the `Avatar` component to your project you can import it as follows:

```tsx
import { Avatar } from '@amalgama/embassy-ui';
```

## Example

<CodePreview>
    <Avatar
        size="md"
        source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}}
    />
</CodePreview>

```tsx
<Avatar size="md" source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}} />
```

## Props

### source
The source of the image to display.

| Type | Required | 
| ---- | -------- |
| string | Yes |

### size
The size of the avatar.

| Type | Required | Default |
| ---- | -------- | ------- |
| string | No | "md" |

Available sizes:

| Size | Value |
| ---- | ----- |
| "xs" | 40px  |
| "sm" | 64px  |
| "md" | 96px  |
| "lg" | 128px  |
| "xl" | 160px  |

<CodePreview>
    <HStack space="4">
        <Avatar size="xs" source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}} />
        <Avatar size="sm" source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}} />
        <Avatar size="md" source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}} />
        <Avatar size="lg" source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}} />
        <Avatar size="xl" source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}} />
    </HStack>
</CodePreview>

### alt
The alternative text for the image. It will be used for the accessibility label of the image as `{alt}'s avatar`.

| Type | Required | 
| ---- | -------- | 
| string | No | - |

:::info
If you don't provide an `alt` prop, the accessibility label will be `Avatar`.
:::

## Pseudo Props

### __image

Props to be to the internal `Image` component.

| Type       | Required |
| ---------- | -------- |
| `IImageProps`| No       |

<CodePreview>
    <Avatar
        source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}}
        size="xl"
        __image={{
            borderWidth: "xl",
            borderColor: "success.500",
        }}
    />
</CodePreview>

```tsx
<Avatar
    source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}}
    size="xl"
    __image={{
        borderWidth: "xl",
        borderColor: "success.500",
    }}
/>


