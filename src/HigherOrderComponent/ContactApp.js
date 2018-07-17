import React, { Component, Fragment } from "react";
import ContactView from "./ContactView";

import "./ContactApp.css";

export default class ContactApp extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?nat=us&results=10")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          img: user.picture.thumbnail
        }))
      )
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    return (
      <Fragment>
        <ContactView contacts={this.state.contacts} />
      </Fragment>
    );
  }
}
