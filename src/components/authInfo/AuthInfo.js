import React from 'react'
import { useSelector } from "react-redux";
import { getUserName } from "../../redux/selectors";
import "./authInfo.scss"

const AuthInfo = () => {
  const name = useSelector(getUserName);
  return (
    <div className="header__title">
      Hello, {name || "User"}
    </div>
  )
}

export default AuthInfo
