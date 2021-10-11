export const navActions = {
    setFold: Symbol("setFold"),
}

/**
 * 是否折叠
 * @param {*} isFlod 
 * @returns 
 */
export function setFoldAction () {
    return {
        type: navActions.setFold,
    }
} 