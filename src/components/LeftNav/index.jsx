import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import Avatar from "../Avatar";
import { NavLink, withRouter } from "react-router-dom";
import "../../assets/static/iconfont.css";

import routes from "../../Router";
const ICON_CLASSS = [
  "icon-home-3-line",
  "icon-account-pin-box-line",
  "icon-book-3-line",
  "icon-chat-smile-2-line",
  "icon-psychotherapy-line",
];
function LeftNav(props) {
  const lis = routes.map((nav, index) => {
    return (
      <NavLink
        exact
        to={nav.path}
        activeClassName="nav-item-active"
        className="nav-item"
        key={index}
        isActive={(match, location) => {
            if((nav.path !== "/" && location.pathname.startsWith(nav.path)) || nav.path === location.pathname ) {
                return true;
            }
            if(!match) {
                return false;
            }
        }}
      >
        <i className={`iconfont ${ICON_CLASSS[index]}`}></i>
        <li className="nav-item-text">
          {nav.text}
        </li>
      </NavLink>
    );
  });
  return (
    <div className="nav-container" onClick={(e) => {
        // console.log(e.target)
    }}>
      <div className="avatar-wrap">
        <Avatar imgWidth={100} imgHeight={100} />
      </div>
      <ul className="nav-content">{lis}</ul>
    </div>
  );
}

LeftNav.defaultProps = {
    isFold: false, // 是否折叠
}

LeftNav.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
  isFold: PropTypes.bool
};

export default withRouter(LeftNav);
