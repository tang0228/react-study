import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";


import "./blogToc.css";

// let currentAnchor = "";
export default function BlogToc(props) {
  const history = useHistory();
  const { toc } = props;
  useEffect(() => {
    history.listen((historyLocation) => {
    //    historyLocation.hash.slice(1);
    });
  }, [history]);
  const lis = getTocEle(toc);
  return <ul className="blog-toc-container">{lis}</ul>;
}

function getTocEle(tocs) {
  let arr = [];
  function _getTocEle(tocs) {
    Array.isArray(tocs) &&
      tocs.forEach((ele) => {
        arr.push(
          <li className={"anchor-first"} key={ele.anchor}>
            <a href={`#${ele.anchor}`}>{ele.name}</a>
          </li>
        );
        if (ele.children) {
          ele.children.forEach((c) => {
            arr.push(
              <li className={"anchor-second"} key={c.anchor}>
                <a href={`#${c.anchor}`}>{c.name}</a>
              </li>
            );
          });
        }
      });
    return arr;
  }
  return _getTocEle(tocs);
}
