import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    } catch (e) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };

  render() {
    let contactInfo = (
      <ul className="list-group">
        <li className="list-group-item">
          Phone:
          {this.props.phone}
        </li>
        <li className="list-group-item">
          Email:
          {this.props.email}
        </li>
      </ul>
    );
    if (!this.state.showContactInfo) {
      contactInfo = null;
    }
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="mb-4 card card-body">
                <h4>
                  {this.props.name} &nbsp;
                  <i
                    onClick={this.onShowClick}
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer" }}
                  />
                  <i
                    className="fas fa-times"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "red"
                    }}
                    onClick={() => this.onDeleteClick(this.props.id, dispatch)}
                  />
                  <Link to={`contact/edit/${this.props.id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "black",
                        marginRight: "1rem"
                      }}
                    />
                  </Link>
                </h4>
                {contactInfo}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
