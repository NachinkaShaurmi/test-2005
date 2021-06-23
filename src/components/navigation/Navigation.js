import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
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
        <NavLink className="nav__element" to="/" onClick={authHandler}>
          {isAuth ? "LogOut" : "LogIn"}
        </NavLink>
        <NavLink className="nav__element" to="/users">
          Users list
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
