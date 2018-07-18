import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";

export const Button = styled.button`
  border-radius: 3px;
  padding: 1em 1em;
  margin: 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export default class StyledComponents extends Component {
  render() {
    return (
      <Fragment>
        <div className="experiment">
          <h1>5. Styled Components</h1>
          <h2>
            Styled Components are not a core react feature but a popular npm
            module. It lets you write pure css onto styled canned components. It
            uses a very cool ES6 syntax called "Tagged Template Literals" that
            let you call a function using backticks "``" with string
            interpolations built in! Check out these examples:<br />
            <br />
          </h2>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
        </div>
      </Fragment>
    );
  }
}
