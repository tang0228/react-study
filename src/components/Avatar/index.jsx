import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import src from "../../assets/image/avatar.webp";

export default function Avatar(props) {
  return (
    <img
      className="avatar-img"  
      src={props.avatarSrc}
      alt=""
      style={{
        width: props.imgWidth,
        height: props.imgHeight,
      }}
    />
  );
}

Avatar.defaultProps = {
  avatarSrc: src,
  imgWidth: 25,
  imgHeight: 25,
};

Avatar.propTypes = {
  avatarSrc: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
};
