import React from "react";
import PropTypes from "prop-types";
import "./index.css";

/**
 * 得到分页组件的位置
 * @param {*} position 
 * @returns 
 */
function getAlign(position) {
  switch (position) {
    case "left":
      return "pager-container pager-left";
    case "center":
      return "pager-container pager-center";
    case "right":
      return "pager-container pager-right";
    default:
      return "pager-container";
  }
}
/**
 * 分页组件
 * @param {*} props
 * @returns
 */
export default function Pager(props) {
  const pageNumbers = getTotalPages(props); // 总页数
  if (pageNumbers === 0) {
    // 页码为0
    return null;
  }
  let min = getMinPage(props); // 最小页码
  let max = getMaxPage(props, min, pageNumbers); // 最大页码
  let pageArr = [];
  for (let i = min; i <= max; i++) {
    pageArr.push(
      <span
        key={i}
        className={props.current === i ? "item active" : "item"}
        onClick={() => {
          toPage(i, props);
        }}
      >
        {i}
      </span>
    );
  }

  return (
    <div className={getAlign(props.align)}>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() => {
          toPage(1, props);
        }}
      >
        首页
      </span>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() => {
          toPage(props.current - 1 < 1 ? 1 : props.current - 1, props);
        }}
      >
        上一页
      </span>
      {pageArr}
      <span
        className={props.current === pageNumbers ? "item disabled" : "item"}
        onClick={() => {
          toPage(
            props.current + 1 > pageNumbers ? pageNumbers : props.current + 1,
            props
          );
        }}
      >
        下一页
      </span>
      <span
        className={props.current === pageNumbers ? "item disabled" : "item"}
        onClick={() => {
          toPage(pageNumbers, props);
        }}
      >
        尾页
      </span>
    </div>
  );
}

Pager.defaultProps = {
  limit: 10,
  current: 1,
  panelNumber: 5,
  total: 0,
  align: "left",
};

Pager.propTypes = {
  limit: PropTypes.number, // 页容量
  current: PropTypes.number, // 当前页
  panelNumber: PropTypes.number, // 显示的页数量
  total: PropTypes.number, // 总数量
  onPageChange: PropTypes.func, // 页面改变触发的事件
  align: PropTypes.string, // 分页组件的位置 left：左，center：中间，right：右
};
/**
 * 计算总页数
 * @param {*} props
 * @returns
 */
function getTotalPages(props) {
  return Math.ceil(props.total / props.limit);
}

/**
 * 计算最小页码
 * @param {*} prpos
 * @returns
 */
function getMinPage(props) {
  let min = props.current - Math.floor(props.panelNumber / 2);
  if (min < 1) {
    min = 1;
  }
  return min;
}

/**
 *
 * @param {*} props
 * @param {最小页码} min
 * @param {总页数} pageNumbers
 */
function getMaxPage(props, min, pageNumbers) {
  let max = min + props.panelNumber - 1;
  if (max > pageNumbers) {
    max = pageNumbers;
  }
  return max;
}

/**
 *
 * @param {目标页} target
 * @param {*} props
 */
function toPage(target, props) {
  if (target === props.current) {
    // 如果和当前页面一样，不跳转
    return;
  }
  // 向父组件抛出事件
  props.onPageChange && props.onPageChange(target);
}
