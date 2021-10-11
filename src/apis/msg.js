import ins from "./request";

// 提交留言
export async function postMessage(options) {
    return await ins.post("/message", options);
}

// 分页获取留言
export async function getMessages(page = 1, limit = 10) {
    return await ins.get("/message", {
        params: {
            page,
            limit
        }
    })
}