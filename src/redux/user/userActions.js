import { LOG_IN, LOG_OUT } from "./userTypes";

export const logIn = (userData) => ({
  type: LOG_IN,
  payload: userData
})

export const logOut = () => ({
  type: LOG_OUT,
})