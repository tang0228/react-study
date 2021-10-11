import { navActions } from "../action/nav";

const initData = {
    isFold: false,
}

export default function navReducer(state = initData, {type}) {
    switch (type) {
        case navActions.setFold:
            return !state
        default:
            return state
    }

}