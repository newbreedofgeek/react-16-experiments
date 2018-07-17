import React, { Component, Fragment } from "react";
import LoaderHOC from "./LoaderHOC";

class ContactView extends Component {
  render() {
    return (
      <Fragment>
        <h4>Your Contacts are...</h4>
        {this.props.contacts.map((contact, idx) => (
          <div key={idx}>
            <img src={contact.img} alt={contact.name} />
            <div>{contact.name}</div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default LoaderHOC("contacts")(ContactView);
