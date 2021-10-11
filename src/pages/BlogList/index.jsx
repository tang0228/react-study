import React, { useEffect, useState, useCallback, useRef } from "react";
import Blogs from "./components/Blogs";
import ThreeLayout from "../../components/ThreeLayout";
import ToTop from "../../components/ToTop";
import BlogsRight from "./components/BlogsRight";
import { Pagination } from "element-react";
import { getBlogByPage, getBlogType } from "../../apis/blog";

import "./index.css";

export default function BlogList() {
  const blogsWrap = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(-1);
  const [showToTop, setShowToTop] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [blogTypes, setBlogTypes] = useState([]);
  const [total, setTotal] = useState(0);

  // 分页获取文章
  useEffect(() => {
    (async () => {
      const datas = await getBlogByPage({
        currentPage,
        category,
      });
      setBlogList(datas.rows);
      setTotal(datas.total);
      clickHandler();
    })();
  }, [currentPage, category]);

  // 获取文章分类
  useEffect(() => {
    (async () => {
      const datas = await getBlogType();
      setBlogTypes(datas);
    })();
  }, []);

  // 监控滚动条变化
  const handleScroll = useCallback(() => {
    let scrollTop = blogsWrap.current.scrollTop;
    if (scrollTop > 250) {
      setShowToTop(true);
    } else {
      setShowToTop(false);
    }
  });

  // 页码变化
  const handlePageChange = useCallback(async (page) => {
    setCurrentPage(page);
  });

  // 点击toTop到顶部
  const clickHandler = useCallback(() => {
    blogsWrap.current.scrollTop = 0;
  });

  // 点击文章分类
  const handleBlogTypesClick = useCallback((id) => {
    setCategory(id);
  });
  return (
    <ThreeLayout
      leftWidth={0}
      right={
        <BlogsRight
          blogTypes={blogTypes}
          blogsTypeClick={handleBlogTypesClick}
        />
      }
    >
      <div
        className="blog-list-container"
        ref={blogsWrap}
        onScroll={handleScroll}
      >
        <Blogs blogs={blogList} />
        <div className="page-wrap">
          <Pagination
            layout="prev, pager, next"
            total={total}
            currentPage={currentPage}
            onCurrentChange={handlePageChange}
          />
        </div>
      </div>
      <ToTop showToTop={showToTop} handleClick={clickHandler} />
    </ThreeLayout>
  );
}
