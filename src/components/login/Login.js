import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory  } from "react-router-dom";
import { logIn } from "../../redux/user/userActions";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = /^[\d\w.@+_-]{1,150}$/.test(login);
  const checkPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login, password);
    if (checkLogin && checkPassword) {
      dispatch(logIn({login, password}));
      history.push("/users");
    }
  }
  return (
    <div className="login">
      <form className="login__form form" onSubmit={handleSubmit}>
        <div className="form__element">
          <label className="form__label" htmlFor="userLogin">Login:</label>
          <input
            className="form__input"
            type="text"
            id="login"
            required
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <div>{checkLogin ? <span>&#10004;</span> : <span>&#10008;</span>}</div>
        </div>

        <div className="form__element">
          <label className="form__label" htmlFor="password">Password:</label>
          <input
            className="form__input"
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>{checkPassword ? <span>&#10004;</span> : <span>&#10008;</span>}</div>
        </div>
        <button className="form__submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
