import ins from "./request"

/**
 * 文章分类
 * @returns 
 */
export async function getBlogType() {
    return await ins.get("/blogtype");
}

/**
 * 分页获取文章
 * @param {*} page 
 * @param {*} limit 
 * @param {*} category 
 */
export async function getBlogByPage(page = 1, limit = 10, category = -1) {
    return await ins.get("/blog", {
        params: {
            page, limit, category
        }
    })
}

// 获取单个博客信息
export async function getBlog(id) {
    return await ins.get(`/blog/${id}`);

}

// 提交评论
export async function postComment(options) {
    return await ins.post("/comment", options);

}

// 分页获取评论
export async function getComments(blogId, page = 1, limit = 10) {
    return await ins.get("/comment", {
        params: {
            blogId,
            page,
            limit
        }
    })

}