import axios from "axios";
import React, { Component } from "react";
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

class CreateAccountPage extends Component {
  state = {
    username: null,
    password: null,
    error: null
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

    this.setState({
      error: null
    });

    if (!username || !password) {
      this.setState({
        error: "A username and password is required."
      });
      return;
    }

    axios
      .post("/api/users", {
        username,
        password
      })
      .then(user => {
        history.push("/login");
      })
      .catch(err => {
        this.setState({
          error: err.response.data.message || err.message
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
          <Button type="submit"><a href="https://ianhawkoh.github.io/bracket/">Create Account</a></Button>
        </Form>
      </Container>
    );
  }
}

export default CreateAccountPage;
