import { USERS_LIST } from "../types/types"

export const setUserDetails = (data) => dispatch => {
    dispatch({ type: USERS_LIST, payload: data })
}
