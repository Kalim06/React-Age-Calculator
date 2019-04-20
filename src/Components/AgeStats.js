import React, { Component } from "react";
import partyPopper from "../assets/party-popper.jpg";

class AgeStats extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let birthdate = new Date(date).getTime();
    let diff = Math.abs(today - birthdate);

    let days = Math.floor(diff / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${years} years, ${months} months, and ${days} days`;
  }

  render() {
    return (
      <div className="ageStats">
        <h3>{this.props.date}</h3>
        <h2>Congrats for {this.timeSince(this.props.date)} on EARTH!</h2>
        <img src={partyPopper} alt="pic" className="partyPopper" />
      </div>
    );
  }
}

export default AgeStats;
