import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login"
import UserList from "./components/usersList/UsersList"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route render={() => <Login />} path="/" exact />
          <Route render={() => <UserList />} path="/users" />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
