import React, { Component, Fragment } from "react";
import Toggle from "./Toggle";
import ToggleRenderProps from "./ToggleRenderProps";

export default class RenderProps extends Component {
  render() {
    return (
      <Fragment>
        <div className="experiment">
          <h1>1. Render Props Pattern</h1>

          <div className="entity">
            <h2>
              These are traditional components where the view logic is hard
              coupled with the behaviour
            </h2>
            <h3>
              If you need to have multiple components that has toggle view
              behaviour then all code needs to be replicated as seperate
              components. Its a waste!
            </h3>
            <Toggle>
              <h2>Showing...</h2>
            </Toggle>

            <Toggle>
              <h2>Showing...</h2>
            </Toggle>
          </div>

          <div className="entity">
            <h2>
              These use the "render props" pattern to decouple behaviour from
              the view
            </h2>
            <h3>
              What this means is that you can share "toggle" behaviour on any
              type of visual composition
            </h3>
            <ToggleRenderProps>
              {({ on, toggle }) => (
                <div>
                  <div>I am a simple div that gets shown:</div>
                  {on && <div>Showing...</div>}
                  <button onClick={toggle}>
                    I am a toggle button (show / hide)
                  </button>
                </div>
              )}
            </ToggleRenderProps>

            <ToggleRenderProps>
              {({ on, toggle }) => (
                <div>
                  <div>I am a table that gets shown:</div>
                  {on && (
                    <table>
                      <tr>
                        <td>foo</td>
                        <td>bar</td>
                      </tr>
                    </table>
                  )}
                  <a onClick={toggle} href="#">
                    I am a toggle a link (show / hide)
                  </a>
                </div>
              )}
            </ToggleRenderProps>
          </div>
        </div>
      </Fragment>
    );
  }
}
