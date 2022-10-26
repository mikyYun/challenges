# React Router vs React Router DOM
resource: https://www.syncfusion.com/blogs/post/react-router-vs-react-router-dom.aspx

## Why is React Router needed?
React does not include many advanced features or routing by default. Therefore, React Router provides navigation for these single-page applications to render multiple views.

## What is React Router?
`React Router` is for routing among various view components in React applications. It helps keep the user interface in sync with the URL. In addition, React Router allows defining which view to display for a specified URL
* Main packages related to React Router
```
  1. react-router: Contains the core functionality of React Router, including route-matching algorithms and hooks
  2. react-router-dom: Includes everything in `react-router` and adds a few DOM-specified APIs
  3. react-router-native: Includes everything in `react-router` and adds a few React Native-specific APIs
```

## What is React Router DOM?
It is implementing dynamic routing in web applications. Based on the platform and the requirements of the application, `react-router-dom` supports component-based routing, which is the ideal solution for routing if the React application is running on the browser.

```js
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import About from './components/about';
  import Home from './components/home';

  function App() {
  return (
    <BrowserRouter>
    <div><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        // Handling Not Found pages
        <Route path="*" element={<PageNotFound />}>
      </Routes>
    </div>
    </BrowserRouter>
  );
  }
```
* BrowserRouter => is a parent component in `react-router-dom` that stores all the route components.
* Routes => is a new component introduced in v6 replaced with `switch`
* Route => is the child component that renders a specific UI component when the URL matches the specified path. The `path` attribute specifies the path name we assign to the component and the `element` attribute refers to the component to render when the URL matches

## Difference between `react-router` and `react-router-dom`
* `react-router` is core package containing standard components and functionalities to implement routing in React applications
* `react-router-dom` is a specialized package that you can use `only in web-browser-based application development`.

## When to Use Which
* working on a web application => `react-router-dom`. because it contains all the necessary common components and features essential for routing in a web application.
* mobile application => `react-router-native` is enough.
! => `react-router-dom` and `react-router-native` both provide all the required functionalities of `react-dom`, no need to import `react-router`