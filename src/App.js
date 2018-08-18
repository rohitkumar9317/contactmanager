import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./context";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import AboutPage from "./components/pages/AboutPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header name="Rohit" />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
