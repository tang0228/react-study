import React, { useCallback, useState } from "react";
import utils from "../../../utils";
import "./search.css";

const hotWords = [
  "Java",
  "HTML",
  "CSS",
  "php",
  "Vue",
  "React",
  "CSS3",
  "HTML5",
  "Go",
  "跨域",
  "Http&Https",
  "axios",
  "面试宝典",
];
const classNames = ["s-red", "s-yellow", "s-green", "s-grey"];

export default function Search() {
  const [keyWord, setKeyWord] = useState("");
  const handleChange = useCallback((e) => {
    setKeyWord(e.target.value);
  }, []);

  const spans = hotWords.map((h, i) => (
    <span
      onClick={(e) => {
        setKeyWord(e.target.innerText);
      }}
      key={i}
      className={classNames[utils.getRangeRandom(0, 3)]}
    >
      {h}
    </span>
  ));
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="search-inp"
          placeholder="请输入关键词"
          type="text"
          onChange={handleChange}
          value={keyWord}
        />
        <button className="search-btn">搜索</button>
      </div>
      <div className="hot-words">{spans}</div>
    </div>
  );
}
