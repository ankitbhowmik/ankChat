import { HEADER_TEST_REDUCER } from "../actions/types"

const INITIAL_STATE = {
    test: "",
}

const HeaderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HEADER_TEST_REDUCER:
            return {
                ...state,
                test: "success",
            }

        default:
            return state;
    }
}

export default HeaderReducer