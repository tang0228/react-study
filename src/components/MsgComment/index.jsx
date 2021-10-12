import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import PropTypes from "prop-types";
import "./index.css";

export default function MsgComment(props) {
  const [nickname, setNickname] = useState(""); // 昵称
  const [content, setContent] = useState(""); // 内容
  const handleChange = useCallback((e) => {
    let inpName = e.target.name;
    if (inpName === "nickname") {
      setNickname(e.target.value);
    } else {
      setContent(e.target.value);
    }
  }, []);

  const handleClick = useCallback(() => {
    props.handleSubmit && props.handleSubmit(nickname, content);
    // 输入框清空
    setNickname("");
    setContent("");
  });
  return (
    <div className="msg-wrap" id="form-container">
      <div className="msg-header">
        <ul className="msg-tab">
          <li className="msg-tab-item">按时间排序</li>
        </ul>
      </div>
      <div className="msg-comment-container">
        <Avatar imgHeight={50} imgWidth={50} />
        <div className="msg-textarea">
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={handleChange}
            placeholder="请输入您的昵称"
            maxLength="10"
            className="msg-inp"
          />
          <textarea
            cols="80"
            rows="5"
            name="msg"
            placeholder="请发表您的评论"
            value={content}
            onChange={handleChange}
            className="msg-txt"
          ></textarea>
        </div>
        <button onClick={handleClick}>发表评论</button>
      </div>
    </div>
  );
}

MsgComment.propTypes = {
  handleSubmit: PropTypes.func,
};
