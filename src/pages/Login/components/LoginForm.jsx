import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import Captcha from "react-captcha-code";
import "./loginForm.css";

export default function LoginForm(props) {
  const [account, setAccount] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [accountErr, setAccountErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [codeErr, setCodeErr] = useState("");
  const captchaRef = useRef();

  const handleChange = useCallback((e) => {
    let name = e.target.name;
    if (name === "account") {
      setAccount(e.target.value);
    } else if (name === "pass") {
      setPass(e.target.value);
    } else {
      setCode(e.target.value);
    }
  }, []);

  const handleCodeChange = useCallback((captcha) => {
    setCaptchaCode(captcha);
  }, []);

  const handleBlur = useCallback((e) => {
    let name = e.target.name;
    if (name === "account") {
      if (!account) {
        setAccountErr("请输入你的账号呀，笨蛋！");
      } else {
        setAccountErr("");
      }
    } else if (name === "pass") {
      if (!pass) {
        setPassErr("what！，你没输入密码？");
      } else {
        setPassErr("");
      }
    } else {
      if (!code) {
        setCodeErr("亲。还有输入验证码呢！");
      } else {
        setCodeErr("");
      }
    }
  });

  const refreshCode = useCallback(() => {
    captchaRef.current.refresh();
  });

  const handleSubmit = useCallback(() => {
    props.onSubmit && props.onSubmit(account, pass, code, captchaCode);
  });

  const handleReset = useCallback(() => {
    setAccount("");
    setPass("");
    setCode("");
  });

  return (
    <div className="login-container">
      <div className="form-header">
        <span className="active">密码登录</span>
      </div>
      <div className="form-item">
        <input
          type="text"
          name="account"
          value={account}
          placeholder="你的账号"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="text">
        <p className="tips">{accountErr}</p>
      </div>
      <div className="form-item">
        <input
          type="password"
          name="pass"
          placeholder="你的密码"
          value={pass}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="text">
        <p className="tips">{passErr}</p>
      </div>
      <div className="form-item">
        <input
          type="text"
          name="code"
          placeholder="验证码"
          value={code}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button className="code">
          <Captcha
            ref={captchaRef}
            charNum={4}
            onChange={handleCodeChange}
            width={130}
            height={36}
            className="captcha"
          />
        </button>
        <span className="captcha-tip"  onClick={refreshCode}>看不清，换一个？</span>
      </div>
      <div className="text">
        <p className="tips">
          {codeErr}
        </p>
      </div>
      <div className="form-item btn-box">
        <button className="login btn" onClick={handleSubmit}>
          登录
        </button>
        <button className="reset btn" onClick={handleReset}>
          重置
        </button>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
