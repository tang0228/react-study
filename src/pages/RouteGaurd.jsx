import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

let prevLoaction, location, action, unBlock;

class _GaurdHelper extends React.Component {
  componentDidMount() {
    //添加阻塞
    console.log(this.props);
    unBlock = this.props.history.block((newLocation, ac) => {
      prevLoaction = this.props.location;
      location = newLocation;
      action = ac;
      return "";
    });

    //添加一个监听器
    this.unListen = this.props.history.listen((location, action) => {
      if (this.props.onChange) {
        const prevLoaction = this.props.location;
        this.props.onChange(prevLoaction, location, action, this.unListen);
      }
    });
  }

  componentWillUnmount() {
    unBlock();
    this.unListen();
  }

  render() {
    return null;
  }
}

const GaurdHelper = withRouter(_GaurdHelper);

export default class RouteGaurd extends React.Component {
  handleConfirm = (msg, commit) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLoaction,
        location,
        action,
        commit,
        unBlock
      );
    } else {
      commit(true);
    }
  };
  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GaurdHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    );
  }
}
