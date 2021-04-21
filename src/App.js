import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      SocialData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getSocialData() {
    $.ajax({
      url: "./Social.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ SocialData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getSocialData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.SocialData.main} />
        <About data={this.state.SocialData.about} />
        <Contact data={this.state.SocialData.main} />
        <Footer data={this.state.SocialData.main} />
      </div>
    );
  }
}

export default App;
