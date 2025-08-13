# M1st Design System Documentation

A comprehensive documentation and showcase site for the M1st Design System. This repository demonstrates the components and design tokens from our component library.

## Repository Structure

This documentation site works in conjunction with our component library:

- **Component Library**: [m1st-design-components](https://github.com/Members1stFederalCreditUnion/m1st-design-components) - Contains the actual React components, design tokens, and distributable packages
- **Documentation Site**: This repository - Showcases the design system and provides implementation guidance

## Features

- 🎨 **Comprehensive Component Documentation** - Interactive examples of all design system components
- 🌓 **Dual Theme Support** - Light and dark modes with automatic system preference detection  
- ♿ **Accessibility Guidelines** - Documentation follows WCAG guidelines with accessibility examples
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- 🧩 **Live Component Demos** - Real components imported from the @m1st/design-components package
- 📚 **Implementation Guides** - Step-by-step instructions for developers and designers

## Component Library Integration

This site imports components from the published npm package:

```bash
npm install @m1st/design-components
```

Components are imported and used exactly as developers would in their applications:

```jsx
import { Button, Modal, LoadingSpinner } from '@m1st/design-components';
import '@m1st/design-components/styles';

function App() {
  return (
    <div className="m1st-app">
      <Button variant="primary">Save Changes</Button>
      <LoadingSpinner size="medium" />
    </div>
  );
}
```

## Available Scripts

This is a React application built with Create React App. In the project directory, you can run:

### `npm start`

Runs the documentation site in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the documentation site for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contributing

For component library changes, please contribute to the [m1st-design-components](https://github.com/Members1stFederalCreditUnion/m1st-design-components) repository.

For documentation improvements, create a pull request in this repository.

## Learn More

- [Component Library Repository](https://github.com/Members1stFederalCreditUnion/m1st-design-components)
- [Design System Documentation](https://members1stfederalcreditunion.github.io/m1st-design-system/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
