import React from "react";
import Search from "./components/Search";
import AsideInfo from "./components/AsideInfo";
import QuickWeb from "./components/QuickWeb";
// import store from "../../store";

import "./index.css";

import {
  incrementAction,
  decrementAction,
} from "../../store/action/count";
import {setFoldAction } from "../../store/action/nav"
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: (...args) => dispatch(incrementAction(...args)),
    decrease: (...args) => dispatch(decrementAction(...args)),
    setFold: (...args) => dispatch(setFoldAction(...args)),
  };
};

class Index extends React.Component {
  render() {
    // const { countReducer, increase, decrease } = this.props;
    return (
      <div className="main-container">
        <div className="top">
            <Search />
            <AsideInfo />
        </div>
        <QuickWeb />
      </div>
    );
  }
}

export default connect((state) => state, mapDispatchToProps)(Index);
