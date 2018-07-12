import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";

import Toggle from "./Toggle";
import ToggleRenderProps from "./ToggleRenderProps";

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Menu />
        </Header>

        <Toggle>
          <h2>Showing...</h2>
        </Toggle>

        <Toggle>
          <h2>Showing...</h2>
        </Toggle>

        <ToggleRenderProps
          render={({ on, toggle }) => {
            return (
              <div>
                <div>This is render props based toggle</div>
                {on && <h2>Showing...</h2>}
                <button onClick={toggle}>show / hide</button>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
