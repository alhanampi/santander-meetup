import Navbar from "./components/shr/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LoginHome from "./components/Home/LoginHome";
import AdminScreen from "./components/Auth/AdminScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/authContext/AuthState";
import MeetupState from "./context/meetupContext/MeetupState";
import setAuthToken from "./utils/utilSetAuthToken";
import PrivateRoutes from "./utils/utilPrivateRoutes";
import Footer from "./components/shr/Footer";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <MeetupState>
        <Router>
          <div className="appWrapper">
          <Navbar />
          <Switch>
            {/* public routes */}
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {/* protected routes: no token, no access! */}
            <PrivateRoutes exact path="/user" component={LoginHome} />
            <PrivateRoutes exact path="/admin" component={AdminScreen} />
          </Switch>
          </div>
          {/* <div className="appPush"></div> */}
          <Footer className="footer" />
        </Router>
      </MeetupState>
    </AuthState>
  );
}

export default App;
