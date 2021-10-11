import React from "react";
import PropTypes from "prop-types";
import "./blogsRight.css";

export default function BlogsRight(props) {
  const { blogTypes } = props;
  const dds = blogTypes.map(ele => (
    <dd className="blogs-item" key={ele.id} onClick={() =>{
        props.blogsTypeClick && props.blogsTypeClick(ele.id); 
    }}>
      <span className="blogs-item-title">{ele.name}</span>
      <span className="blogs-item-num">{ele.articleCount}</span>
    </dd>
  ));
  return (
    <dl className="blogs-right-container">
      <dt className="blogs-title">文章分类</dt>
      {dds}
    </dl>
  );
}

BlogsRight.propTypes = {
  blogTypes: PropTypes.array,
  blogsTypeClick: PropTypes.func
};
