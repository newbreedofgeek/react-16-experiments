import React, { Component, StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Menu from "./Menu";
import RenderProps from "./RenderProps";
import PortalExample from "./PortalExample";
import Context from "./Context";
import LifeCycle from "./LifeCycle";
import StyledComponents from "./StyledComponents";
import HigherOrderComponent from "./HigherOrderComponent";

import "./styles.css";

function ItemA() {
  return <div>ItemA</div>;
}

function ItemB() {
  return <div>ItemB</div>;
}

const ItemHOCWrapper = Wrapped => {
  const WithWrap = props => {
    return (
      <>
        i've wrapped...
        <Wrapped {...props} />
      </>
    );
  };

  return WithWrap;
};

// S: An example of 2 alternate ways to render HOCs (see below in render)
const ItemHOCA = ItemHOCWrapper(ItemA);
const ItemHOCB = ItemHOCWrapper(ItemB);
const Comps = [ItemHOCA, ItemHOCB];
const CompsAlt = [<ItemHOCA />, <ItemHOCB />];
// E: An example of 2 alternate ways to render HOCs

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
        <StyledComponents />
        <HigherOrderComponent />

        {/* An example of 2 alternate ways to render HOCs  */}
        {/* normal way  */}
        <ItemHOCA />
        <ItemHOCB />

        {/* alternate way  */}
        {Comps[0]()}

        {/* another way  */}
        {CompsAlt[1]}

        {/* An example of 2 alternate ways to render HOCs  */}
      </StrictMode>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
