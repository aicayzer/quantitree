import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Home extends Component {
  state = { journey: "" };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <h1>how many trees is my journey?</h1>
          <TextField
            id="outlined-basic"
            label="journey"
            variant="outlined"
            name="journey"
            onChange={this.handleChange}
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Home;
