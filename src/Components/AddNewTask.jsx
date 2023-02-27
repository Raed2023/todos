import React, { Component } from "react";

export default class AddNewTask extends Component {
  state = {
    newTaskAction: "hello",
  };
  handleSubmit = (e) => {
    e.preventDefault()
    const newObj = {
      id: Math.random(),
      action: this.state.newTaskAction,
      isDone: false,
    };
    this.props.handleAdd(newObj)
    this.setState({newTaskAction:""})
  };
  render() {
    //   console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTaskAction}
            onChange={(e) => this.setState({ newTaskAction: e.target.value })}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
