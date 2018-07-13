import React, {
  Component,
  Fragment,
  unstable_AsyncMode as AsyncMode
} from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  state = {
    rotateLeft: false,
    foldUp: false
  };

  updatePosition = () => {
    this.setState({
      rotateLeft: !this.state.rotateLeft
    });
  };

  updateFold = () => {
    this.setState({
      foldUp: !this.state.foldUp
    });
  };

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");

    return state;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");

    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");

    // proceed with DOM render only if state has changed
    return !Object.is(this.state, nextState);
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("UNSAFE_componentWillReceiveProps");
  }

  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
    console.log(info);
    console.error(error);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");

    const sqrCls = this.state.rotateLeft
      ? "turnSquare left"
      : "turnSquare right";
    const foldCls = this.state.foldUp ? "foldDiv up" : "foldDiv down";

    return (
      <Fragment>
        <h3>Hello, I am the Events Component.</h3>
        <div>
          In the console you will also see Warnings of the deprecated events as
          we are wrapped in the "StrictMode" component. Click on square to see
          post mount events in console.
        </div>
        <div onClick={this.updatePosition} className={sqrCls}>
          Click Me
        </div>
        <AsyncMode>
          <div onClick={this.updateFold} className={foldCls}>
            Click Me as well:
            <br />
            <b>
              I contain a transition and as I'm close to the rotating square
              above any update to me can block the UI thread and square rotation
              can be "janked". To prevent this and give the square rotation
              priority we use the new AsyncMode to wrap this element. This is
              experimental but seems to work well.
            </b>
            <br />Ne vis nulla primis option, nulla viris voluptatum ea nam,
            animal pericula ad qui. Wisi blandit duo no, corpora mentitum qui
            ea. Est accusamus assueverit in, te usu minim postea aperiri, his
            menandri recteque at. Duis habemus nominati mea ex. Id mea cibo
            veri.
          </div>
        </AsyncMode>
      </Fragment>
    );
  }
}
