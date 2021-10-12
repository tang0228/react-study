import React from "react";
import Search from "./components/Search";
import AsideInfo from "./components/AsideInfo";
import QuickWeb from "./components/QuickWeb";
import "./index.css";
import { connect } from "react-redux";
import { delUserAction } from "../../store/action/user"

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delUser: (...args) => dispatch(delUserAction(...args))
    }
}
class Index extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="top">
            <Search />
            <AsideInfo {...this.props}/>
        </div>
        <QuickWeb />
      </div>
    );
  }
};

export default connect((state) => state, mapDispatchToProps)(Index);
