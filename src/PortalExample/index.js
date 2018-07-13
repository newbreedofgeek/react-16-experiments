import React, { Component, Fragment } from "react";
import Portal from "./Portal";

export default class PortalExample extends Component {
  state = {
    load: false
  };

  togglePortal = () => {
    this.setState({
      load: !this.state.load
    });
  };

  render() {
    return (
      <Fragment>
        <div className="experiment">
          <h1>2. Portals</h1>
          <h2>
            Portals are amazing! they let you transport react componenets to a
            completely seperate root div (check out the public/index.html file
            for a new root dive called portal). This makes things like Modals
            finally easy to do in react
          </h2>

          <div className="entity">
            <button onClick={this.togglePortal}>
              Load / destroy the portal
            </button>

            {this.state.load && (
              <Portal>
                <div>I am in a portal!!</div>
              </Portal>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
