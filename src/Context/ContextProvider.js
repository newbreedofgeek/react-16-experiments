import React, { Component } from "react";
import { Button } from "../StyledComponents";
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
        <Button onClick={this.toggleTheme}>Toggle theme context</Button>
        {children}
      </MyContext.Provider>
    );
  }
}
