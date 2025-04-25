# Explanation of the Code

This code consists of two React components: `Parent` and `Child`. The `Parent` component manages the state and passes it as a prop to the `Child` component. Below is a detailed breakdown:

---

## **Parent Component**

```javascript
import React, { useState } from 'react';
import Child from './Child'; // Import the Child component

// Parent Component
const Parent = () => {
  const [value, setValue] = useState('Initial Value'); // State in the parent

  const handleChange = (event) => {
    setValue(event.target.value); // Update state on input change
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something to update child"
      />
      <Child value={value} /> {/* Pass state as a prop to the child */}
    </div>
  );
};

export default Parent;
```

### Key Points:
1. **State Management (`useState`)**:
   - The `Parent` component uses the `useState` hook to create a piece of state called `value`, initialized with `'Initial Value'`.
   - `setValue` is a function to update the state.

2. **Input Handling**:
   - The `<input>` element's `value` is bound to the `value` state.
   - The `onChange` event triggers the `handleChange` function, which updates the state to the current value of the input field (`event.target.value`).

3. **Child Component**:
   - The `Child` component is imported and rendered inside the `Parent` component.
   - The `value` state is passed down as a prop (`value`) to the `Child` component.

---

## **Child Component**

```javascript
import React from 'react';

// Child Component
const Child = ({ value }) => {
  console.log('Child component rendering with value:', value);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Value from Parent: {value}</p>

      {value === 'John' && (
        <div>
          <p>Hello John!</p>
          <p>How are you doing today?</p>
        </div>
      )}

      {value === 'Tom' && (
        <div>
          <p>Hello Tom!</p>
          <p>Do you like running track?</p>
        </div>
      )}
    </div>
  );
};

export default Child;
```

### Key Points:
1. **Props**:
   - The `Child` component receives the `value` prop from the `Parent` component. This prop is displayed in the `<p>` tag: `Value from Parent: {value}`.

2. **Conditional Rendering**:
   - The `Child` component conditionally renders different messages based on the value of the `value` prop:
     - If `value` is `'John'`, it displays:
       ```
       Hello John!
       How are you doing today?
       ```
     - If `value` is `'Tom'`, it displays:
       ```
       Hello Tom!
       Do you like running track?
       ```

3. **Logging**:
   - It logs the current value of the `value` prop to the console using `console.log`.

---

## **How It Works Together**
1. The `Parent` component renders an input field and the `Child` component.
2. Initially, the input field displays `'Initial Value'` because this is the default state.
3. When the user types something into the input field:
   - The `handleChange` function updates the `value` state in the `Parent` component.
   - This triggers a re-render of both the `Parent` and `Child` components.
4. The `Child` component receives the updated `value` prop and displays it. If the value is `'John'` or `'Tom'`, it displays the corresponding message.

---

## **Example Scenarios**

### **Initial State**
- **Input field**: `Initial Value`.
- **Child component displays**: `Value from Parent: Initial Value`.

### **User Types "John"**
- **Input field**: `John`.
- **Child component displays**:
  ```
  Value from Parent: John
  Hello John!
  How are you doing today?
  ```

### **User Types "Tom"**
- **Input field**: `Tom`.
- **Child component displays**:
  ```
  Value from Parent: Tom
  Hello Tom!
  Do you like running track?
  ```

### **User Types Something Else**
- **Input field**: `Jane`.
- **Child component displays**: `Value from Parent: Jane`.

---

## **Summary**
This code demonstrates parent-child communication in React using `props`. The `Parent` component manages the state and passes it to the `Child` component, which conditionally displays messages based on the value of the prop. This is a simple example of dynamic rendering in React based on user input.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
