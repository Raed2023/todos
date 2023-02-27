import React, { Component } from "react";
import TaskCard from "./TaskCard";

export default class TaskList extends Component {
  render() {
    return (
      <div>
        {React.Children.toArray(
          this.props.todos.map((el) => (
            <TaskCard task={el} handleDelete={ this.props.handleDelete} handleComplete={this.props.handleComplete}/>
          ))
        )}
      </div>
    );
  }
}
