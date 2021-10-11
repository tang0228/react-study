import React, { useEffect, useState } from 'react'
import { getMyResume } from "../../apis/myinfo"
import "./index.css"

export default function MyInfo() {
    const [src, setSrc] = useState("")
    useEffect(() => {
        (async () => {
            const res = await getMyResume();
            setSrc(res);
        })();
    })
    return (
        <div className="my-info-container">
            <iframe src={src} title="myinfo" className="myinfo"></iframe>
        </div>
    )
}
