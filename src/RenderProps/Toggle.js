import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div>
        <div>I am a traditional toggle</div>
        {this.state.on && this.props.children}
        <button onClick={this.toggle}>show / hide some content</button>
      </div>
    );
  }
}
