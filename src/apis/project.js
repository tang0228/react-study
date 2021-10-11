import ins from "./request"

export async function getProject() {
    return await ins.get("/project");
}