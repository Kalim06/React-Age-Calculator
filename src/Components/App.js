import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import AgeStats from "./AgeStats";

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: "",
      birthday: "1999-10-06",
      showStats: false
    };
  }

  changeBirthday() {
    this.setState({ birthday: this.state.newDate, showStats: true });
  }

  render() {
    return (
      <div className="App">
        <h2>Input Your Birthday!</h2>
        <Form inline>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
          {this.state.showStats ? (
            <AgeStats date={this.state.birthday} />
          ) : (
            <div />
          )}
        </Form>
        {/* <h2>Input Your Birthday!</h2>
        <Form inline className="form-inline">
          <FormControl type="date" /> <Button>Submit</Button>
        </Form> */}
      </div>
    );
  }
}

export default App;
