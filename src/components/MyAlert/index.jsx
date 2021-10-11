import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function MyAlert(props) {
  const { show, type, message } = props.alertInfo;
  const className = getClassName(type);
  useMemo(() => {
      if(show) {
          setTimeout(() => {
              props.changeShow && props.changeShow(false);
          }, 2000);
      }
  }, [show])
  return show ? <div className={className}>{message}</div> : null;
}

MyAlert.defaultProps = {
  alertInfo: {
    show: false,
    type: "",
    message: "",
  },
};

MyAlert.propTypes = {
  alertInfo: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    show: PropTypes.bool,
  }),
  changeShow: PropTypes.func
};

function getClassName(type) {
  switch (type) {
    case "success":
      return "my-alert-container success";
    case "error":
      return "my-alert-container error";
    case "warning":
      return "my-alert-container warning";
    default:
      return "my-alert-container info";
  }
}
