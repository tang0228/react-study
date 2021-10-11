import React from 'react'
import "./index.css"
import {useLocation} from "react-router-dom"
import routes from "../../Router/index"

export default function HeaderBread(props) {
    const l = useLocation();
    const route = routes.find(r => r.path === l.pathname)
    return (
        <div className="header-container">
            <span>{route ? route.text : '123'}</span>
        </div>
    )
}
