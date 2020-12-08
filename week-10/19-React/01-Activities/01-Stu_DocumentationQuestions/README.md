# React Quiz

In this activity, we will begin by installing a few helpful packages and then explore the React Doc to answer questions.

## Instructions

### Part 1

* Begin installing create-react-app globally by running the following command in your terminal:

`npx create-react-app <appname>` where `<appname>` is what you want to name your app. Example: `npx create-react-app practiceapp`.
NPM is a package manager, you can install a package using NPM. NPX is a tool to execute a package. It doesn't matter whether you installed a package globally or locally. NPX will temporarily install it and run it. Remember, if you want to check / run a node package quickly without installing locally or globally use NPX.
* npM - Manage
* npX - Execute

### Part 2

* While those are installing, answer each of the following questions using the [React Doc](https://facebook.github.io/react/).

1. In the previous section we installed create-react-app. What is it for?
   * create-react-app is a comfortable env for learning React, and is the best way to start building a new single-page app in React. It sets up your dev env so that you can use the latest JS features, provides a nice dev experience, and optimizes your app for production. You’ll need to have Node and npm on your machine. create-react-app doesn’t handle backend logic or DB; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

2. What are some benefits of using React?
    - It is a framework for JS that enables using React comps. Because of React, one can use React comps. As such, it facilitates the overall process of writing comps. Analogy: React is like a government or an operating system. React is the framework that enables the idea of comps which make up the UI.
    - Fast Learning Curve:
      - React _is_ more complicated to learn and use than jQuery, but this is an unfair comparison because the two aren't even in the same league. Compared to other competing JS libraries and frameworks such as Angular or Ember, React has much less code that devs need to memorize or worry about, making it much faster to learn.
    - React is comp based:
      - With React we can build encapsulated comps that manage their own state, then compose them to make complex UIs. Since our comps are written in JS instead of HTML, we can easily pass data into our app and keep our state out of the DOM.
    - With React, you can "Learn Once, Write Anywhere":
      - React only tries to be the view layer of our app (the V in MVC). Because of this, it makes no assumptions about the rest of our app, and can be rendered on the client, on the server using node, even in native mobile apps with React Native.

3. What is a React comp?
   * comps let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, comps are JS functions. To invoke a comp, you use the JSX syntax. `function Pokemon() { return "Hello" }` comp can be invoked with `<Pokemon />`. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. Essentially, comps are responsible for rendering some part of an app's UI.

4. What is the significance of the `ReactDOM.render` method?
   * ReactDOM is a virtual copy of the actual Document Object Model (DOM) which is a n-ary tree. If a node in the ReactDOM tree is changed, React will compare the ReactDOM tree with the actual DOM tree and browser will only update that node or subtree rooted at that node. It basically makes use of the HTML file (DOM) which has a tree structure.
   * The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your comps should not need to use this module.
   * Render a React element into the DOM in the supplied container and return a reference to the comp (or returns null for stateless comps). `ReactDOM` is a package separate from the `React` package that provides APIs for DOM specific methods. `ReactDOM.render` function takes a React comp, or tree of React comps and (eventually) renders them to the DOM. For the most part, we generally only run this method once per React app to render a single root comp containing all of our other comps.

5. What is JSX? Why does Facebook recommend using it?
   * It is a syntax extension to JS. We recommend using it with React to describe what the UI should look like. It is helpful as a visual aid when working with UI inside the JS code. They recommend everyone begin with [create-react-app](https://github.com/facebookincubator/create-react-app). Normally, setting up a robust React app from scratch requires a deep understanding of build tools such as [Webpack](https://webpack.js.org/) (used for bundling an app's assets) and [Babel](http://babeljs.io/) (used for transpiling JSX and ES6+ code to plain, widely supported, ES5 JS). Thankfully, we can use create-react-app to quickly scaffold out a React app in seconds with all of the features and configuration we'd need for _most_ apps.

6. What is Babel? And what role does it play in converting JSX into vanilla JS?
   * Babel is a JS transpiler that includes the ability to compile JSX into regular JS functions that browsers can understand. [Babel](http://babeljs.io/) is a JS compiler. It takes next generation JS (ES6/ES7/ES8) and compiles it down to widely supported ES5 JS code. Babel is useless without plugins for new JS features such as JSX syntax, strong typing annotation by TypeScript, promises, spread operator, async/await, classes, and arrow function. A collection of plugins is called a preset. Devs can also extend the JS syntax and add on their own features, and share them with others in the form of a Babel plugin.
     * `npm i --save-dev babel-cli`
     * `npm i --save-dev <plugin>`
     * `babel -plugins <plugin> hello.js` or you can specify plugins and presets in `.babelrc` file at the root of a project.

7. What is the significance of { } curly braces in JSX?
   * You can put any valid JS expression inside the curly braces in JSX. An expression is not a statement. An expression evaluates to a value. The { } single curly braces inside of JSX work similarly to the {{ }} double curly braces in handlebars. They allow us to pass values and expressions into our view.

8.  What is a comp prop?
       * Whether you declare a comp as a function or a class, it must never modify its own props. All React comps must act like pure functions with respect to their props. A prop is essentially a function argument that's passed into our comp from outside and can be used inside of it. For example, we could write a comp for a button that renders different types of buttons depending on the prop it's passed. A pure function is a function where the return value is only determined by its input values. Computing it does not change the input. It does not write to log files, do network requests, ask for user input, or change program state. A pure function can only access what you pass it. When functions are pure and values are easy to inspect and create, then every function call can be reproduced in isolation.
