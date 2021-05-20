import { LOG_IN, LOG_OUT } from "./userTypes";

export const initialState = {
  login: null,
  password: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        login: action.payload.login,
        password: action.payload.password,
      };
    case LOG_OUT:
      return {
        ...state,
        login: null,
        password: null,
      };
    default:
      return state;
  }
};

export default userReducer;
