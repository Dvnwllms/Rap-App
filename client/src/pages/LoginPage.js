import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav.js"
import "./LoginPage.css"
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row
} from "reactstrap";
import { update } from "../services/withUser";

class LoginPage extends Component {
  state = {
    username: null,
    password: null
  };
  handleInputChanged = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleLogin = event => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    // post an auth request
    axios
      .post("/api/auth", {
        username,
        password
      })
      .then(user => {
        update(user.data);
        history.push("/");
      })
      .catch(err => {
        this.setState({
          error:
            err.response.status === 401
              ? "Invalid username or password."
              : err.message
        });
      });
  };
  render() {
    return (
      <Container>
        <Form className="Form" onSubmit={this.handleLogin}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Username
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={this.handleInputChanged}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
                onChange={this.handleInputChanged}
              />
            </Col>
          </FormGroup>
          <Button type="submit">Create Account</Button>
        </Form>
      </Container>
    );
}
}

export default LoginPage;
