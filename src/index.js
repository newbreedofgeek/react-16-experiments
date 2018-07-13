import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";
import RenderProps from "./RenderProps";
import PortalExample from "./PortalExample";
import Context from "./Context";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <Menu />
        </Header>

        <RenderProps />
        <PortalExample />
        <Context />
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
