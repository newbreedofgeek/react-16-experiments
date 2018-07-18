import React, { Component, Fragment } from "react";
import { Button } from "../StyledComponents";
import ContactApp from "./ContactApp";

export default class HigerOrderComponent extends Component {
  state = {
    app: false
  };

  toggleApp = () => {
    this.setState({
      app: !this.state.app
    });
  };

  render() {
    return (
      <Fragment>
        <div className="experiment">
          <h1>5. Higer Order Componenets (HOC)</h1>
          <h2>
            This design pattern lets you augment your component with some
            additional logic and then returns the new augmented version of your
            component. It lets you do things like inspect the original props,
            modify or inject new props or completely render something else
            (called render hijacking -- think authentication/authorization). In
            this example we use an HOC to add loading state to components that
            fetch data via an API.
            <br />
            <br />
            Click on the button below to load the HOC experiment, you will see a
            loading screen before data is show. Then check out the code to see
            how it was put together. Also notice how the HOC provides “generic”
            loading view to any collection based component passed to it. We use
            a “carrying” method to pass in the collection name first and then
            the original component.
          </h2>

          <Button onClick={this.toggleApp}>Load / Reload App</Button>
          {this.state.app && <ContactApp />}
        </div>
      </Fragment>
    );
  }
}
