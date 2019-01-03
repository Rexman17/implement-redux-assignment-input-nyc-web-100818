import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from 'react-redux'

class App extends Component {
  state = {
    attendees: [],
    name: ""
  };
  render() {
    return (
      <>
        <input
          type="text"
          onChange={event =>
            this.setState({
              name: event.target.value
            })
          }
          value={this.props.name}
        />
        <button
          onClick={() => {
            this.setState({
              name: "",
              attendees: [...this.state.attendees, this.state.name]
            });
          }}
        >
          Attend
        </button>
        <p>Attending the Redux party: {this.state.attendees.join(", ")}</p>
      </>
    );
  }
}
// determines what will be the name of the prop
const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp;
