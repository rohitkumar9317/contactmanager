import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="container">
                <h2 className="display-4 mb-4">
                  <span className="text-danger">Contact </span>
                  List
                </h2>
                {contacts.map(contact => {
                  return (
                    <div>
                      <Contact
                        key={contact.id}
                        id={contact.id}
                        email={contact.email}
                        name={contact.name}
                        phone={contact.phone}
                      />
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
