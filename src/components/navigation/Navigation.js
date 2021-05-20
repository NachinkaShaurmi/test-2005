import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/selectors";
import { logOut } from "../../redux/user/userActions";
import "./navigation.scss";

const Navigation = () => {
  const isAuth = useSelector(getUserName);
  const dispatch = useDispatch();

  const authHandler = () => {
    if (isAuth) {
      dispatch(logOut());
    }
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink className="nav__element" to="/">
          Main
        </NavLink>
        <NavLink className="nav__element" to="/profile">
          Profile
        </NavLink>
        <NavLink className="nav__element" to="/login" onClick={authHandler}>
          {isAuth ? "LogOut" : "LogIn"}
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
