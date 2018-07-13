import React, { Component } from "react";
export const MyContext = React.createContext();

export default class ContextProvider extends Component {
  state = {
    theme: "dark"
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "lite" : "dark"
    });
  };

  render() {
    const { children } = this.props;

    return (
      <MyContext.Provider value={this.state.theme}>
        <button onClick={this.toggleTheme}>Toggle theme context</button>
        {children}
      </MyContext.Provider>
    );
  }
}
