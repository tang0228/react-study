import { countActions } from "../action/count";

const initData = {
    count: 0
}; // 初始值

export default function countReducer(state = initData, { type }) {
    switch (type) {
        case countActions.increment:
            return { ...state, count: state.count + 1 };
        case countActions.decrement:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}