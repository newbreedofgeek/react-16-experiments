import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";
import RenderProps from "./RenderProps";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <Menu />
        </Header>

        <RenderProps />
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
