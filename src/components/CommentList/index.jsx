import React from 'react';
import PropTypes from "prop-types"
import "./index.css"
import utils from '../../utils';

import Avatar from '../Avatar';

export default function CommetList(props) {
    const {commentNums, commentList} = props;
    const lis = commentList.map((ele, index) => (
        <li key={index} className="comment-list-item">
            <Avatar avatarSrc={ele.avatar} imgWidth={50} imgHeight={50}/>
            <div className="main">
                <span>{ele.nickname}</span>
                <p>{ele.content}</p>
            </div>
            <span className="date">{utils.formateDate(ele.createDate, true)}</span>
        </li>
    ))
    return (
        <div className="comment-list-container">
            <div className="comment-header">
                <span className="comment-title">留言数:</span>
                <span className="comment-nums">{commentNums}</span>
            </div>
            <ul className="comment-list-content">
                {lis}
            </ul>
        </div>
    )
}

CommetList.propTypes = {
    commentNums: PropTypes.number,
    commentList: PropTypes.array
}
