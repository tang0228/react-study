import Mock from "mockjs";

/**
 * 简历
 */
Mock.mock("/api/resume", "get", {
    code: 0,
    msg: "",
    data: "https://www.strml.net"
})

/**
 * 个人介绍
 */
Mock.mock("/api/myinfo", "get", {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        name: "@cname(5, 7)",
        imgHead: "@image(48x48, @color, #ccc, @title)",
        "codeMonth|1-36": 0,
        job: "@ctitle(3, 5)",
        "articalNums|50-120": 0,
        "weekRank|10-60": 0,
        "totalRank|10-60": 0,
        "watchNums|1000-10000": 0,
        "score|100-500": 0,
        "fans|100-600": 0,
        "commentNums|10-300": 0,
        "praiseNums|100-400": 0,
        "likeNums|100-300": 0,
        "icons":[
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
        ],
        "level|1-100": 0
    }
})