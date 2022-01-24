import React, { Component } from "react";
import classes from "./Clock.module.css";

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className={classes.clock}>
        <h3>{this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;