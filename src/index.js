import React, { Component, StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";
import RenderProps from "./RenderProps";
import PortalExample from "./PortalExample";
import Context from "./Context";
import LifeCycle from "./LifeCycle";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <StrictMode>
        <Header>
          <Menu />
        </Header>

        <RenderProps />
        <PortalExample />
        <Context />
        <LifeCycle />
      </StrictMode>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
