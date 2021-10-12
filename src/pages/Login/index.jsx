import React, { useCallback } from "react";
import LoginForm from "./components/LoginForm";
import Top from "./components/Top";
import LoginLeft from "./components/LoginLeft";
import { login } from "../../apis/login";
import { Message } from "element-react";
import { useHistory } from "react-router-dom";

import { addUserAction } from "../../store/action/user";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUser: (...args) => dispatch(addUserAction(...args)),
  };
};

function Login(props) {
  const { addUser } = props;
  const history = useHistory();
  const submitHandler = useCallback((account, pass, code, captchaCode) => {
    if (!account || !pass) {
      Message({
        type: "warning",
        message: "不输入完整还想登录？想什么呢！",
      });
      return;
    }
    if (!code || code !== captchaCode) {
      Message({
        type: "error",
        message: "验证码是不是错了呀！",
      });
      return;
    }
    login(account, pass).then((res) => {
      if (res) {
        Message({
          type: "success",
          message: "登录成功",
        });
        addUser(res);
        localStorage.setItem("isLogin", JSON.stringify(res));
        history.push("/", "login");
      } else {
        Message({
          type: "error",
          message: "账号或密码错误",
        });
      }
    });
  }, []);
  return (
    <div>
      <Top />
      <div className="center-container">
        <LoginLeft />
        <LoginForm onSubmit={submitHandler} />
      </div>
    </div>
  );
}

export default connect((state) => state, mapDispatchToProps)(Login);
