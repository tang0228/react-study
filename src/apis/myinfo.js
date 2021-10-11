import ins from "./request"

// 个人简历
export async function getMyResume() {
    return await ins.get("/resume");
}

// 个人信息
export async function getMyInfo() {
    return await ins.get("/myinfo");
}