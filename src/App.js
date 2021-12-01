import "./App.css";
import LoginPage from "./components/login";
import SendEmail from "./components/SendEmail";
import ResetPassword from "./components/ResetPassword";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/forgot-password">
            <SendEmail />
          </Route>
          <Route exact path="/ResetPassword/:resetToken">
            <ResetPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
