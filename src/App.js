import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <Contact
          name="Oyebade Samuel"
          email="oyebadesamuel@gmail.com"
          phone="234 803 4444 224"
        />
        <Contact
          name="Oyebade Priscilla"
          email="oyebadepriscilla@gmail.com"
          phone="234 803 4444 223"
        />
        </div>
      </div>
    );
  }
}

export default App;
