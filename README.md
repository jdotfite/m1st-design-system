# M1st Design System

A comprehensive, accessible, and modern design system built with React and Tailwind CSS.

## Features

- 🎨 **Comprehensive Button System** - 6 button variants with 4 background compatibility
- 🌓 **Dual Theme Support** - Light and dark modes with automatic system preference detection
- ♿ **Accessibility First** - All components follow WCAG guidelines
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- 🧩 **Modular Components** - Reusable, composable UI components
- 🎭 **Bootstrap-like Colors** - Familiar color system with modern implementation

## Button System

The button component features a comprehensive design system with 6 variants:

### Primary Button
- **Light Theme**: Almost black background (#1a1a1a) with almost white text (#fafafa)
- **Dark Theme**: Almost white background (#fafafa) with almost black text (#1a1a1a)

### Secondary Button  
- **Light Theme**: Almost black outline (#1a1a1a) with almost black text
- **Dark Theme**: Almost white outline (#fafafa) with almost white text

### Light Button
- **All Themes**: Bootstrap-like light background with appropriate contrast

### Additional Variants
- **Outline**: Blue outline for compatibility
- **Ghost**: Transparent background with blue text
- **Danger**: Red background for destructive actions

### 4 Background Compatibility
All buttons work seamlessly on:
1. **White backgrounds** - Pure white (#ffffff)
2. **Light backgrounds** - Bootstrap-like light (#f8f9fa)
3. **Container backgrounds** - Theme-aware container colors
4. **Main backgrounds** - Theme-aware main layout colors

## Usage

```jsx
import { Button } from './components/ui';

// Primary button (almost black with almost white text)
<Button variant="primary" size="md">Save Changes</Button>

// Secondary button (almost black outline)
<Button variant="secondary" size="md">Cancel</Button>

// Light button (Bootstrap-like)
<Button variant="light" size="md">Info</Button>

// With icons
<Button variant="primary" leftIcon={<Icon />}>With Icon</Button>

// Loading state
<Button variant="primary" isLoading>Saving...</Button>

// Full width
<Button variant="primary" fullWidth>Full Width</Button>
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
