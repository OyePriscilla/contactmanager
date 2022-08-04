import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

import "bootstrap/dist/css/bootstrap.min.css";

class Contact extends Component {
  state = {
    showContactDetails: false,
  };

  showContact = () => {
    this.setState({
      showContactDetails: !this.state.showContactDetails,
    });
  };

  onDeleteContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactDetails } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.showContact}
                  style={{ cursor: "pointer" }}
                  className="fa fa-sort-down"
                ></i>
                <i
                  onClick={this.onDeleteContact.bind(this, id, dispatch)}
                  className="fa fa-times"
                  style={{ color: "red", float: "right", cursor: "pointer" }}
                ></i>
              </h4>
              {showContactDetails ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
