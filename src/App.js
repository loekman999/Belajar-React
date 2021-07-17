import "./App.css";
import React from "react";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Products from "./component/pages/Products";
import Services from "./component/pages/Services";
import SignUp from "./component/pages/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
