import React, { Component } from "react";
// import uuid from "uuid";
import axios from "axios";

import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  inputchangedHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = async dispatch => {
    //event.preventDefault();
    const { name, email, phone, errors } = this.state;

    const newContact = {
      name,
      email,
      phone
    };
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({
      type: "ADD_CONTACT",
      payload: res.data
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 mt-3 container">
              <div className="card-header mt-3">Add Contact</div>
              <div className="card-body">
                <form>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.inputchangedHandler}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.inputchangedHandler}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.inputchangedHandler}
                    error={errors.phone}
                  />
                  <input
                    type="button"
                    value="Add Contact"
                    className="btn btn-primary btn-block"
                    onClick={() => this.onSubmitHandler(dispatch)}
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
