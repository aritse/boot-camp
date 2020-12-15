import {Component} from "react";
import FormFunctionComponent from "./components/FormFunctionComponent";
import FormClassComponent from "./components/FormClassComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <FormFunctionComponent/>
        <FormClassComponent/>
      </div>
    );
  }
}
