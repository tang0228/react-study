export const userActions = {
    addUser: Symbol("addUser"),
    delUser: Symbol("delUser"),
};

export function addUserAction(user) {
    return {
        type: userActions.addUser,
        payload: user
    }
};

export function delUserAction() {
    return {
        type: userActions.delUser
    }
};