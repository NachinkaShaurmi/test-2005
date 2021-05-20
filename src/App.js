import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserName } from "./redux/selectors";
import "./App.scss";
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login"

function App() {
  const isAuth = useSelector(getUserName);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route render={() => <MainPage />} path="/" exact />
          <Route render={() => <Login />} path="/login" />
          <Route
            render={() => (isAuth ? <Profile /> : <Redirect to="/login" />)}
            path="/profile"
          />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
