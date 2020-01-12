import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import * as authService from "../../services/authService";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const { data } = this.state;
    await authService.login(data.username, data.password);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
