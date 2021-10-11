import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import "./index.css";
import { getProject } from "../../apis/project";
import github from "../../assets/image/github-fill.png";
import ToTop from "../../components/ToTop";

export default function Helper() {
  const [showToTop, setShowToTop] = useState(false);
  const proWrap = useRef();
  const [proList, setProList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProject();
      setProList(data);
    })();
  }, []);

  const handleScroll = useCallback(
      () => {
          let scrollTop = proWrap.current.scrollTop;
          if(scrollTop > 250) {
              setShowToTop(true);
          } else {
              setShowToTop(false);
          }
      },
  )

  const clickHandler = useCallback(() => {
    proWrap.current.scrollTop = 0;
  });

  const lis = proList.map((p) => (
    <li key={p.id} className="pro-item">
      <img src={p.thumb[0]} alt="" className="thumb" />
      <div className="main">
        <div className="header">
          <a className="name" href={p.url ? p.url : "#"}>
            <h3>{p.name}</h3>
          </a>
          {p.github ? (
            <a href={p.github} className="github">
              <img src={github} alt=""></img>
            </a>
          ) : null}
        </div>
        <div className="des">
          {p.description.map((ele, index) => (
            <p key={index}>{ele}</p>
          ))}
        </div>
      </div>
    </li>
  ));
  return (
    <Fragment>
      <ul className="project-container" ref={proWrap} onScroll={handleScroll}>{lis}</ul>
      <ToTop showToTop={showToTop} handleClick={clickHandler} />
    </Fragment>
  );
}
