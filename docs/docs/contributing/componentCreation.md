# Component Creation

Here are a few steps that we advise you to follow when creating a new component.

### 1. Create your component folder on the `src/components/main` folder
Usually, the name of the folder is the same as the component name. For example, if you are creating a `Button` component, the folder name should be `Button`.

### 2. Create your component files
Inside the component folder, you will need to create at least the following files:
- `index.tsx` - This is the main file of the component. It should export the component itself. Be sure to use the `tsx` extension or you will not be able to develop the component properly.
- `types.ts` - This file should contain the types of the component props.
- `hooks.ts` - This file should contain the hooks of the component.

### 3. Create your component
Inside the `index.tsx` file, you should create the component itself. You can use the `Button` component as an example.

#### 3.1 Set your component default styles
On `src/core/theme/defaultTheme/components`, you will find a file for each component. For example, the `Button` component has a `Button.ts` file. This file contains the default styles of the component and its subcomponents for each relevant state. You should add your component styles file there, and don't forget to add the component to the `components` object on the `src/core/theme/defaultTheme/index.ts` file. You can see more about how to set the default styles on the [Styling your component](/docs/contributing/StylingYourComponent) section.

#### 3.2 Add your component props resolver hook
On the `hooks.ts` file you should create your `useComponentNamePropsResolver` hook. This hook should receive the component props that are important for the component style (for example wheter the button is disabled or not) and return the resolved props that will be used by the component and its subcomponents. You can use the `useButtonPropsResolver` hook as an example. It's important to note that the `useComponentNamePropsResolver` hook has the responsibility of applying the default props of the component, if you are having troubles with this be sure to check that you are properly calling your hook inside your component.

When creating your `useComponentNamePropsResolver` hook you will probably be using the `useComponentPropsResolver` hook. For this hook to work with your component, you will need to create a `ComponentName` type. You can do this by adding your component name to the `src/core/components/types/common.ts` file so that it can be used as a type. This is needed to resolve it's default styling props.

## I have finished creating my component, what should I do now?

###  Add your component to the `src/components/index.ts` file
You should add your component to the `src/components/index.ts` file and to `src/index.tsx` so that it can be imported from the `react-native-ui-kit` package.

### Make sure your component is properly documented
You should add your component to the `docs/docs/components` folder.
Also you should make both web and native examples of your component. 