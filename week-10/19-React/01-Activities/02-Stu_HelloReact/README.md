# Hello React

In this activity, we will dissect a simple React application.

## Instructions

* If you haven't already, generate a starter React app using Create React App. You can do this by running `npx create-react-app reactpractice`. We will run all of the activity code today inside of this boilerplate, as to avoid constantly reinstalling the same node modules.

* Once you have a `reactpractice` React app generated, delete the `src` folder inside of your starter app and replace it with the [src](Unsolved/src) provided with this activity.

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

### HelloReact.js

* Then go into the `src` folder and with your partner, try to answer the following questions:

  * What's happening inside of `src/components/HelloReact.js`? How does it relate to the content being rendered to the browser?
  * The `HelloReact` function returns some JSX describing the UI we eventually want this particular component to be able to render to the document. If we were to change the JSX being returned by this function, and we were running our React app in dev mode (when we run `npm start`), the document would auto update inside of our web browser without us having to refresh. Create React App uses a Webpack development server that auto updates the view as the content changes.

### App.js

* Open the `src/App.js` file, what's going on in this file? Try to answer the following questions:

  * What does the `App` function return?
  * In this file we define another component named `App`. It's common to have multiple components that fit together inside of a React application. We'll typically compose all of the top level components inside of our `App` component.

  * Why do we import the React library? We aren't using the React keyword anywhere. Is it possible to remove this and still have our code work?
  * Whenever we use JSX inside of our JavaScript, we need to import the React library. When Babel translates our `App` component's JSX code to plain old JavaScript, it looks like this:

  * ```js
    var App = function App() {
      return React.createElement(HelloReact, null);
    };
    ```

    ^ See how the `React.createElement` method is used? Because the plain JavaScript code uses this method, we get the 'React' must be in scope when using JSX error when compiling if we don't import React.

### index.js

* Open the `src/index.js` file and go over the code. Notice that we're importing the `ReactDOM` library. Try to answer the following questions:

  * Do you remember what the purpose of `ReactDOM.render` is? What is it doing?
  * We use `ReactDOM.render` to render a single component or tree of components to the DOM. In our case, `App` is the root of our component tree (it renders all of our other components inside).

  * Is this where our components are rendered to the DOM?

  * Instead of splitting our files up into `App`, `components/HelloReact` and `index`, is it possible to just write our entire Hello World app in the `index.js` file?
  * Definitely! This code would work:

    ```js
    import React from "react";
    import ReactDOM from "react-dom";

    function HelloReact() {
      return (
        <p>Hello World!</p>;
      );
    }

    ReactDOM.render(<HelloReact />, document.getElementById("root"));
    ```

    * React is fairly unopinionated, so we can accomplish the same thing in a variety of ways. There are more conventions and best practices than there are right and wrong ways to do things.
