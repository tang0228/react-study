import React, { useEffect, useState, useCallback, useRef } from "react";
import MsgComment from "../../components/MsgComment";
import BlogToc from "./components/BlogToc";
import ThreeLayout from "../../components/ThreeLayout";
import ToTop from "../../components/ToTop";
import CommetList from "../../components/CommentList";
import { Pagination, Message } from "element-react";
import { useParams, Link } from "react-router-dom";
import { getBlog, getComments } from "../../apis/blog";
import utils from "../../utils";
import { v4 as uuidv4 } from "uuid";

import "./blogDetail.css";
import "../../assets/markdown.css";

const avatars = [
  "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
  "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
  "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
  "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
];

export default function BLogDetail(props) {
  const [showToTop, setShowToTop] = useState(false); // 控制toTop的显示隐藏
  const blogDetailWrap = useRef();
  const params = useParams(); // 地址栏参数
  const [blogDetail, setBlogDetail] = useState(null); // 文章详情
  const [commentList, setCommentList] = useState([]); // 评论列表
  const [commentNums, setCommentNums] = useState(0); // 评论总数
  const [page, setPage] = useState(1); // 当前页
  // 获取文章详情
  useEffect(() => {
    (async () => {
      const data = await getBlog(params.id);
      setBlogDetail(data);
    })();
  }, [params.id]);
  // 分页获取文章评论
  useEffect(() => {
    (async () => {
      const data = await getComments(params.id, page);
      setCommentList(data.rows);
      setCommentNums(data.total);
    })();
  }, [params.id, page]);
  // 监控滚动条变化
  const handleScroll = useCallback(() => {
    let scrollTop = blogDetailWrap.current.scrollTop;
    if (scrollTop > 250) {
      setShowToTop(true);
    } else {
      setShowToTop(false);
    }
  });
  // 点击toTop
  const clickHandler = useCallback(() => {
    blogDetailWrap.current.scrollTop = 0;
  }, []);
  // 发表评论
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
      type: "success",
      message: "留言成功",
    });
    setCommentList([
      {
        id: uuidv4(),
        nickname,
        content,
        avatar: avatars[utils.getRangeRandom(0, 3)],
        createDate: Date.now(),
      },
      ...commentList,
    ]);
    setCommentNums(commentNums + 1);
  });
  // 页码变化
  const handlePageChange = useCallback((page) => {
    setPage(page);
  });
  return (
    <ThreeLayout
      leftWidth={0}
      right={<BlogToc toc={!blogDetail ? [] : blogDetail.toc} />}
    >
      <div
        className="blog-detail-wrap"
        onScroll={handleScroll}
        ref={blogDetailWrap}
      >
        {!blogDetail ? (
          ""
        ) : (
          <div className="blog-detail-container">
            <h1>{blogDetail.title}</h1>
            <div className="aside">
              <span className="item">
                日期：{utils.formateDate(blogDetail.createDate)}
              </span>
              <span className="item">浏览：{blogDetail.scanNumber}</span>
              <span
                onClick={() => {
                  document.getElementById("form-container").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className="item item-cursor"
              >
                评论：{blogDetail.commentNumber}
              </span>
              <Link className="item" to="/bloglist">
                {blogDetail.category.name}
              </Link>
            </div>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: blogDetail.htmlContent }}
            ></div>
          </div>
        )}
        <MsgComment handleSubmit={handleSubmit} />
        <CommetList commentNums={commentNums} commentList={commentList} />
        <div className="page-wrap">
          <Pagination
            layout="prev, pager, next"
            total={commentNums}
            currentPage={page}
            onCurrentChange={handlePageChange}
          />
        </div>
      </div>
      <ToTop showToTop={showToTop} handleClick={clickHandler} />
    </ThreeLayout>
  );
}
