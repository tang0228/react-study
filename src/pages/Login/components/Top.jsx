import React, { Fragment } from "react";
import "./top.css";

export default function Top() {
  return (
    <Fragment>
      <div className="top-container">
        <img
          src="https://s1.hdslb.com/bfs/static/passport/static/img/rl_top.35edfde.png"
          alt=""
        />
      </div>
      <div className="line-title">
          <span>登录</span>
      </div>
    </Fragment>
  );
}
