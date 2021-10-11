import React from 'react'
import PropTypes from "prop-types"
import "./index.css"

export default function Layout(props) {
    return (
        <div className="layout-container">
            <div className="main">
                {props.children}
            </div>
            <div className="left" style={{
                width: props.leftWidth
            }}>
                {props.left}
            </div>
            <div className="right" style={{
                width: props.rightWidth
            }}>
                {props.right}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
}

Layout.propTypes = {
    children: PropTypes.node,
    left: PropTypes.node,
    right: PropTypes.node,
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number
}
