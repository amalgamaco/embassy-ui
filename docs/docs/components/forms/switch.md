import {Radio, HStack, Icon, Switch} from '@amalgama/embassy-ui'
import Feather from 'react-native-vector-icons/Feather';
import CodePreview from "@site/src/components/CodePreview"

# Switch

## Import 

To add the `Switch` component to your project you can import it as follows:

```tsx
import {Switch} from '@amalgama/embassy-ui'; 
```

## Standalone

### Example
<CodePreview>
    <Switch/>
</CodePreview>

```jsx
import { Switch } from '@amalgama/embassy-ui';

<Switch/>
```

## Props

### initialValue

Sets the initial value of the switch.

| TYPE    | REQUIRED | DEFAULT |
| ------- | -------- | ------- |
| boolean | No       | false   |

<CodePreview>
    <Switch/>
    <Switch initialValue={true}/>
</CodePreview>

```jsx
import { Switch } from '@amalgama/embassy-ui';

<Switch/>
<Switch initialValue={true}/>
```

### disabled

If the Switch is disabled or not.

| TYPE    | REQUIRED | DEFAULT |
| ------- | -------- | ------- |
| boolean | No       | false   |

<CodePreview>
        <Switch disabled/>
        <Switch disabled initialValue={true}/>
</CodePreview>

```jsx
import { Switch } from '@amalgama/embassy-ui';

<Switch disabled/>
<Switch disabled initialValue={true}/>
```

### onChange

Callback that is called when the value of the switch changes.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| function | No       | -       |

<CodePreview>
    <Switch onChange={(value) => window.alert(`The switch is ${value ? "on" : "off"}`)}/>
</CodePreview>

```jsx
import { Switch } from '@amalgama/embassy-ui';

<Switch onChange={(value) => window.alert(`The switch is ${value ? "on" : "off"}`}/>
```

### withIcon

If the switch should have an on/off icon.

| TYPE    | REQUIRED | DEFAULT |
| ------- | -------- | ------- |
| boolean | No       | true    |

<CodePreview>
    <Switch withIcon={false}/>
</CodePreview>

```jsx

import { Switch } from '@amalgama/embassy-ui';

<Switch withIcon={false}/>
```

### onIcon

The icon to be displayed when the switch is on.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| JSX.Element | No       | "check" |

<CodePreview>
    <Switch onIcon={<Icon name="star"/>} initialValue={true}/>
</CodePreview>

```jsx
import { Switch, Icon } from '@amalgama/embassy-ui';

<Switch onIcon={<Icon name="star"/>} initialValue={true}/>
```

### offIcon

The icon to be displayed when the switch is off.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| JSX.Element | No       | "x"     |

<CodePreview>
    <Switch offIcon={<Icon name="rocket"/>}/>
</CodePreview>

```jsx
import { Switch, Icon } from '@amalgama/embassy-ui';

<Switch offIcon={<Icon name="rocket"/>}/>
```

### animationDuration

The duration of the thumb slide animation.

| TYPE   | REQUIRED | DEFAULT |
| ------ | -------- | ------- |
| number | No       | 500     |

<CodePreview>
    <Switch animationDuration={2000}/>
</CodePreview>

```jsx
import { Switch } from '@amalgama/embassy-ui';

<Switch animationDuration={2000}/>
```

## Pseudo Props

### __switchContainer

Props to be applied to the container of the switch.

| TYPE      | REQUIRED | 
| --------- | -------- | 
| IBoxProps | No       |


### __icon

Props to be applied to the internal `Icon` component showing the right icon.

| TYPE   | REQUIRED |
| ------ | -------- |
| IIconProps | No   |

### __iconContainer

Props to be applied to the internal `Box` component which contains the label and the icons.

| TYPE   | REQUIRED |
| ------ | -------- |
| IBoxProps | No  |










