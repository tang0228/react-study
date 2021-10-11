import React, { useCallback } from 'react'

import PropTypes from "prop-types"

import "./index.css"

export default function ToTop(props) {
    const { showToTop } = props;
   
    const toTop = useCallback(
        () => {
            props.handleClick && props.handleClick();
        },
    )
    return (
            !showToTop ? null : <div className="to-top-container" onClick={toTop}></div>
    )
}

ToTop.defaultProps = {
    showToTop: false
}

ToTop.propTypes = {
    PropTypes: PropTypes.bool,
    handleClick: PropTypes.func
}
