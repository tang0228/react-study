import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./asideInfo.css";
import { getMyInfo } from "../../../apis/myinfo";

function AsideInfo(props) {
  const [myInfo, setMyInfo] = useState(null);
  
  useEffect(() => {
    (async () => {
      const res = await getMyInfo();
      setMyInfo(res);
    })();
  }, []);
  return myInfo ? (
    <div className="aside-info-container">
      <div className="info-intro">
        <img src={myInfo.imgHead} alt="" />
        <div className="intro-main">
          <span className="name">{myInfo.name}</span>
          <div className="row">
            <span className="year">
              码龄
              {myInfo.codeMonth > 12
                ? parseInt(myInfo.codeMonth / 12) + "年 "
                : myInfo.codeMonth + "个月"}
            </span>
            <span className="level">{myInfo.level}</span>
            <span>{myInfo.job}</span>
          </div>
          <div className="btns">
            <button className="intro-btn" onClick={() => {
                props.history.push("/message")
            }}>私信</button>
            <button className="intro-btn">关注</button>
          </div>
        </div>
      </div>
      <div className="info-statis">
        <div className="item">
          <span className="nums">{myInfo.articalNums}</span>
          <span className="name">原创</span>
        </div>
        <div className="item">
          <span className="nums">{myInfo.weekRank}</span>
          <span className="name">周排名</span>
        </div>
        <div className="item">
          <span className="nums">{myInfo.totalRank}</span>
          <span className="name">总排名</span>
        </div>
        <div className="item">
          <span className="nums">{myInfo.watchNums}</span>
          <span className="color-grey">访问</span>
        </div>
        <div className="item">
          <span className="nums">{myInfo.level}</span>
          <span className="color-grey">等级</span>
        </div>
      </div>
      <div className="mark"></div>
      <div className="info-statis">
        <div className="item">
          <span className="nums">{myInfo.score}</span>
          <span className="color-grey">积分</span>
        </div>
        <div className="item">
          <span className="nums">{myInfo.fans}</span>
          <span className="color-grey">粉丝</span>
        </div>
        <div className="item">
          <span className="nums">{myInfo.praiseNums}</span>
          <span className="color-grey">获赞</span>
        </div>
        <div className="item">
          <span className="nums">{myInfo.commentNums}</span>
          <span className="color-grey">评论</span>
        </div>
        <div className="item">
          <span className="nums">{myInfo.likeNums}</span>
          <span className="color-grey">收藏</span>
        </div>
      </div>
      <div className="icons-wrap">
        {myInfo.icons.map((img, index) => (
          <img src={img} alt="" key={index} />
        ))}
      </div>
    </div>
  ) : null;
}

export default withRouter(AsideInfo);
