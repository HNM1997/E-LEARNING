import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screen/Home";
import CourseDetail from "./Screen/Details";
import SignUp from "./Screen/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./pages/header/Header";
import Register from "./Screen/Register/Register";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/detail/:id" exact component={CourseDetail} />
        <Route path="/signup" exact component={SignUp} />
        <Route path={"/register"} exact component={Register} />
        <Route path="/" component={HomeScreen} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
