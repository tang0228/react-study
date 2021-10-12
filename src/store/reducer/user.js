import { userActions } from "../action/user";

// 登录的账号
let initData = {
    user: null
}

export default function userReducer(state = initData, {type, payload}) {
    switch (type) {
        case userActions.addUser:
            return payload
        case userActions.delUser:
            return null
        default:
            return state;
    }
}