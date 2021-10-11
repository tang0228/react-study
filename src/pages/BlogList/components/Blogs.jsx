import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./blogs.css"
import utils from "../../../utils"

export default class Blogs extends Component {
  render() {
    const {blogs} = this.props;
    return (
      <ul className="blogs-container">
        {blogs.map((blog, index) => {
          return (
            <li key={index + blog.id} className="blogs-item">
              <div className="thumb-wrap">
                <Link to={{
                    pathname: "/bloglist/" + blog.id,
                    state: blog.title
                }}>
                  {blog.thumb ? <img src={blog.thumb} alt=""/> : null }
                </Link>
              </div>
              <div className="main-wrap">
                <Link to={{
                    pathname: "/bloglist/" + blog.id,
                    state: blog.title
                }}>
                  <h2>{blog.title}</h2>
                </Link>
                <div className="main-content">
                  <span>日期:{utils.formateDate(blog.createDate)}</span>
                  <span>浏览:{blog.scanNumber}</span>
                  <span>评论:{blog.commentNumber}</span>
                </div>
                <div className="desc">{blog.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
