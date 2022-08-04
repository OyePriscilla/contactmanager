import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Samuel Oyebade",
        email: "samueloye@gmail.com",
        phone: "803 5544 666",
      },
      {
        id: 2,
        name: "Priscilla Oyebade",
        email: "priscillaoye@gmail.com",
        phone: "803 8844 666",
      },
      {
        id: 3,
        name: "AdeOye Oyebade",
        email: "adeoyeoye@gmail.com",
        phone: "803 2244 666",
      },
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
