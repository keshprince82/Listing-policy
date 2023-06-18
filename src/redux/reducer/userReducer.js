import { USERS_LIST } from "../types/types";

const initialState = {
  users: [],
};
 const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;