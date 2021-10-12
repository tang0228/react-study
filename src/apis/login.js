import ins from "./request";

export async function login(account, pass) {
    return await ins.post("/login", {
        account,
        pass
    })
}