# Portfolio Documentation

## Components

### Modal

The `Modal` component is a reusable modal component that can be used throughout the application. It is styled with Tailwind CSS and can optionally display an icon.

#### Props

The `Modal` component accepts the following props:

- `buttonText`: The text to be displayed on the button that opens the modal.

- `modalContent`: The content to be displayed inside the modal. This can be any valid `ReactNode`, including other React components.

- `modalTitle`: The title to be displayed at the top of the modal.

- `goBackText`: The text to be displayed on the "go back" button inside the modal.

- `proceedText`: The text to be displayed on the "proceed" button inside the modal.

- `onProceed`: A function that is called when the "proceed" button is clicked. This function should not return anything (`void`).

- `buttonIcon`: An optional icon to be displayed on the button that opens the modal. This should be a component from the `react-icons` library. If this prop is not provided, no icon will be displayed.

- `goBackIcon`: An optional icon to be displayed on the "go back" button inside the modal. This should be a component from the `react-icons` library. If this prop is not provided, no icon will be displayed.

- `proceedIcon`: An optional icon to be displayed on the "proceed" button inside the modal. This should be a component from the `react-icons` library. If this prop is not provided, no icon will be displayed.

#### Usage

Here is an example of how to use the `Modal` component:

```
typescript
import { ModalButton } from "@/app/components/shared/Modal";
import { FiHome } from "react-icons/fi";

const Component = () => {
  return (
    <ModalButton
      buttonText="Open Modal"
      modalTitle="My Modal"
      goBackText="Go Back"
      proceedText="Proceed"
      onProceed={() => console.log("Proceed button clicked")}
      buttonIcon={FiHome}
    >
      <p>This is the content of the modal.</p>
  </ModalButton>
  );
};
```

In this example, the `Modal` component is used to create a modal that displays a paragraph of text when the "Open Modal" button is clicked. The button displays the `FiHome` icon. The "Proceed" button logs a message to the console when clicked.

### Button

The `Button` component is a reusable button component that can be used throughout the application. It is styled with Tailwind CSS and can optionally display an icon.

#### Props

The `Button` component accepts the following props:

- `onClick`: A function that is called when the button is clicked. This function should not return anything (`void`).

- `children`: The content to be displayed inside the button. This can be a string of text, but it can also be any valid `ReactNode`, including other React components.

- `icon`: An optional icon to be displayed inside the button. This should be a component from the `react-icons` library. If this prop is not provided, no icon will be displayed.

#### Usage

Here is an example of how to use the `Button` component:

```
import Button from "@/app/components/shared/Button";
import { FiHome } from "react-icons/fi";
import { useRouter } from "next/router";

const Component = () => {
const router = useRouter();

return (
  <Button
    icon={FiHome}
    onClick={() => router.push("/")}
  >
    Home
  </Button>
  );
};
```

In this example, the `Button` component is used to create a button that navigates to the home page when clicked. The button displays the `FiHome` icon and the text "Home". The `useRouter` hook from Next.js is used to handle the navigation.

#### Styling

The `Button` component is styled with Tailwind CSS. It has a rounded border, a violet border and text color, and a hover effect that scales the button and changes the text color. It also has a transition effect that animates the hover and active states.

The `Button` component also uses the `before` pseudo-element to create a background effect. This effect is animated on hover.

#### Accessibility

The `Button` component uses a `button` HTML element, which is accessible by default. The `onClick` prop corresponds to the `onclick` event handler of the `button` element, which is triggered when the user clicks the button or presses the "Enter" or "Space" key when the button is focused.
