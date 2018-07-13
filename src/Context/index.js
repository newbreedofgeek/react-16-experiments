import React, { Component, Fragment } from "react";
import ContextProvider from "./ContextProvider";
import Child1 from "./Child1";
import Child2 from "./Child2";
import ChildLeaf from "./ChildLeaf";

export default class Context extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="experiment">
          <h1>3. Context</h1>
          <h2>
            A new Context API lets you declaratively pass props down to children
            without the need for explicitly passing them to children (i.e. prop
            drilling)
          </h2>

          <ContextProvider>
            <Child1>
              <Child2>
                <ChildLeaf />
              </Child2>
            </Child1>
          </ContextProvider>
        </div>
      </Fragment>
    );
  }
}
