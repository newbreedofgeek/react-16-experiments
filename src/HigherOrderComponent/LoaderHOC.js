import React, { Component } from "react";

const LoaderHOC = collection => WrappedComponent => {
  return class LoaderHOC extends Component {
    render() {
      return this.props[collection].length === 0 ? (
        <div className="loading" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default LoaderHOC;
