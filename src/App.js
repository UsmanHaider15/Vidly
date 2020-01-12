import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";

import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Customers from "./components/customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/common/not-found";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/common/loginForm";
import RegistrationFrom from "./components/registrationForm";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationFrom} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" render={props => <Movies />} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
