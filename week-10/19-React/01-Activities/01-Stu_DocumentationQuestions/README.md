# React Quiz

In this activity, we will begin by installing a few helpful packages and then explore the React documentation to answer questions.

## Instructions

### Part 1

* Begin installing Create React App globally by running the following command in your terminal:

`npx create-react-app <appname>` where `<appname>` is what you want to name your app. Example: `npx create-react-app practiceapp`.

### Part 2

* While those are installing, work with your group to answer each of the following questions using the [ReactJS Documentation](https://facebook.github.io/react/):

1. In the previous section we installed Create React App. What is it for?
    * Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine. Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them. Create React App is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

2. What are some benefits of using ReactJS?
    - It facilitates the overall process of writing components.
    - It boosts productivity and facilitates further maintenance.
    - It ensures faster rendering.
    - It guarantees stable code.
    - It is SEO friendly.
    - It comes with a helpful developer toolset.
    - There is React Native for mobile app development.
    - It is focused and easy-to-learn.
    - It is backed by a strong community.
    - It is used by both Fortune 500 companies and innovative startups.
    - Fast Learning Curve:** React _is_ more complicated to learn and use than jQuery, but this is an unfair comparison because the two aren't even in the same league. Compared to other competing JavaScript libraries and frameworks such as Angular or Ember, React has much less code that we as developers need to memorize or worry about, making it much faster to learn.
    - React is Component Based:** With React we can build encapsulated components that manage their own state, then compose them to make complex UIs. Since our components are written in JavaScript instead of HTML, we can easily pass data into our application and keep our state out of the DOM.
    - With React, you can "Learn Once, Write Anywhere":** React only tries to be the view layer of our application (the V in MVC). Because of this, it makes no assumptions about the rest of our application, and can be rendered on the client, on the server using node, even in native mobile applications with React Native.


3. What is a React component? Hint: Check the "Components and Props" section of the React documentation.
   * Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be defined as JavaScript functions or ES6 classes." Essentially components are responsible for rendering some part of an application's UI.

4. What is the significance of the `ReactDOM.render` method? Hint: Check the "ReactDOM" section of the documentation.
   * The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.
   * Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components). `ReactDOM` is a package separate from the `React` package that provides APIs for DOM specific methods. `ReactDOM.render` takes a React component, or tree of React components and (eventually) renders them to the DOM. For the most part, we generally only run this method once per React app to render a single root component containing all of our other components.

5. What is JSX? Why does Facebook recommend using it? Hint: Check the "Introducing JSX" section of the documentation.
   * It is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. It is helpful as a visual aid when working with UI inside the JavaScript code. They recommend everyone begin with [Create React App](https://github.com/facebookincubator/create-react-app). Normally, setting up a robust React application from scratch requires a deep understanding of build tools such as [Webpack](https://webpack.js.org/) (used for bundling an application's assets) and [Babel](http://babeljs.io/) (used for transpiling JSX and ES6+ code to plain, widely supported, ES5 JavaScript). Thankfully, we can use Create React App to quickly scaffold  out a React app in seconds with all of the features and configuration we'd need for _most_ applications.

6. What does Facebook recommend as the “best way to start building a new React single page application”? Hint: Check the "Installation" section of the React documentation.
   * Create React App sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

7. What is Babel? And what role does it play in converting JSX into vanilla JavaScript? Hint: Check the "Introducing JSX" section of the documentation.
   * Babel is a JavaScript transpiler that includes the ability to compile JSX into regular JavaScript. [Babel](http://babeljs.io/) is a JavaScript compiler. It takes next generation JavaScript (ES6/ES7/ES8) and compiles it down to widely supported ES5 JavaScript code. It also compiles JSX code down to regular JavaScript functions that browsers can understand. Developers can also extend the JavaScript syntax and add on their own features, and share them with others in the form of a Babel plugin.

8. What is the significance of { } curly braces in JSX? Hint: Check the "Introducing JSX" section of the documentation.
   * You can put any valid JavaScript expression inside the curly braces in JSX. The { } single curly braces inside of JSX work similarly to the {{ }} double curly braces in handlebars: they allow us to pass values and expressions into our view.

9.  What is a component prop? Hint: Check the "Components and Props" section of the React documentation.
    * Whether you declare a component as a function or a class, it must never modify its own props. All React components must act like pure functions with respect to their props. A prop is essentially a function argument that's passed into our component from outside and can be used inside of it. For example, we could write a component for a button that renders different types of buttons depending on the prop it's passed.
