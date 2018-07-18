import React, { Component, Fragment } from "react";
import { Button } from "../StyledComponents";
import Events from "./Events";

export default class LifeCycle extends Component {
  state = {
    render: false
  };

  toggleRender = () => {
    this.setState({
      render: !this.state.render
    });
  };

  render() {
    return (
      <Fragment>
        <div className="experiment">
          <h1>4. LifeCycle & AsyncMode</h1>
          <h2>
            Keep an eye on the console and click button below. It will show you
            the lifecycle order.
          </h2>
          <Button onClick={this.toggleRender}>Render new Component</Button>
          {this.state.render && <Events />}
        </div>
      </Fragment>
    );
  }
}
