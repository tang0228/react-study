export const countActions = {
    increment: Symbol("increment"),
    decrement: Symbol("decrement")
}

export function incrementAction() {
    return {
        type: countActions.increment
    }
}

export function decrementAction() {
    return {
        type: countActions.decrement
    }
}