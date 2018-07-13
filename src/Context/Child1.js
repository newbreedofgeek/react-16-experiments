import React from "react";
import { MyContext } from "./ContextProvider";

export default props => (
  <MyContext.Consumer>
    {val => (
      <div>
        I'm child 1 component, I got "{val}" from context
        {props.children}
      </div>
    )}
  </MyContext.Consumer>
);
