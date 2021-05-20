import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory  } from "react-router-dom";
import { logIn } from "../../redux/user/userActions";
import "./login.scss";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,}$/.test(email);
  const checkPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (checkEmail && checkPassword) {
      dispatch(logIn({login: email, password}));
      history.push("/profile");
    }
  }
  return (
    <div className="login">
      <form className="login__form form" onSubmit={handleSubmit}>
        <div className="form__element">
          <label className="form__label" htmlFor="userEmail">Email:</label>
          <input
            className="form__input"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>{checkEmail ? <span>&#10004;</span> : <span>&#10008;</span>}</div>
        </div>

        <div className="form__element">
          <label className="form__label" htmlFor="password">Пароль:</label>
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
        <button className="form__submit">Submit </button>
      </form>
    </div>
  );
};

export default Login;
