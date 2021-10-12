import React, { Fragment } from "react";
import meImgSrc from "../../../assets/image/me.jpg";
import "./loginLeft.css";

export default function LoginLeft() {
  return (
    <Fragment>
      <div className="left">
        <img src={meImgSrc} alt="" />
        <div className="left-footer">
          <p className="tip">扫描二维码了解</p>
          <p className="desc">请使用微信扫码</p>
        </div>
      </div>
      <div className="line"></div>
    </Fragment>
  );
}
