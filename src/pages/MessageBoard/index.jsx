import React, { useEffect, useState, useCallback, useRef } from "react";
import MsgComment from "../../components/MsgComment";
import CommetList from "../../components/CommentList";
import ToTop from "../../components/ToTop";
import { Pagination, Message } from "element-react";
import "./index.css";
import { getMessages } from "../../apis/msg";
import { v4 as uuidv4 } from "uuid";
import utils from "../../utils";

const avatars = [
  "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
  "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
  "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
  "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
];

export default function MessageBoard() {
  const [msgList, setMsgList] = useState([]); // 留言列表
  const [commentNums, setCommentNums] = useState(0); // 留言总条数
  const [page, setPage] = useState(1); // 当前页码
  const [showToTop, setShowToTop] = useState(false);
  const msgWrap = useRef();
  // 获取留言内容
  useEffect(() => {
    (async () => {
      const res = await getMessages(page);
      setCommentNums(res.total);
      setMsgList(res.rows);
    })();
  }, [page]);
  // 页码变化
  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);
  // 提交留言
  const handleSubmit = useCallback((nickname, content) => {
    if (!nickname || !content) {
      Message({
        showClose: true,
        message: "请填写昵称或内容",
        type: "warning",
      });
      return;
    }
    Message({
      showClose: true,
      message: "谢谢您的留言",
      type: "success",
    });
    setMsgList([
      {
        id: uuidv4(),
        nickname,
        content,
        avatar: avatars[utils.getRangeRandom(0, 3)],
        createDate: Date.now(),
      },
      ...msgList,
    ]);
    setCommentNums(commentNums + 1);
  });
  // 监控滚动条变化
  const handleScroll = useCallback(() => {
    let scrollTop = msgWrap.current.scrollTop;
    if (scrollTop > 250) {
      setShowToTop(true);
    } else {
      setShowToTop(false);
    }
  }, []);
  // 点击totop
  const clickHandler = useCallback(() => {
    msgWrap.current.scrollTop = 0;
  }, []);
  return (
    <div className="msg-board-container" ref={msgWrap} onScroll={handleScroll}>
      <MsgComment handleSubmit={handleSubmit} />
      <CommetList commentList={msgList} commentNums={commentNums} />
      <div className="page-wrap">
        <Pagination
          layout="prev, pager, next"
          total={commentNums}
          currentPage={page}
          onCurrentChange={handlePageChange}
        />
      </div>
      <ToTop showToTop={showToTop} handleClick={clickHandler} />
    </div>
  );
}
