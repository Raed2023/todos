import "./App.css";

import React, { Component } from "react";
import AddNewTask from "./Components/AddNewTask";
import TaskList from "./Components/TaskList";

export default class App extends Component {
  state = {
    todos: [],
  };
  handleAdd = (newTask) =>
    this.setState({ todos: [...this.state.todos, newTask] });
  handleDelete = (ID) =>
    this.setState({ todos: this.state.todos.filter((el) => el.id !== ID) });
  handleComplete = (TheId) =>
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === TheId ? { ...el, isDone: !el.isDone } : el
      ),
    });
  render() {
    return (
      <div className="App">
        <AddNewTask handleAdd={this.handleAdd} />
        <TaskList todos={this.state.todos} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
      </div>
    );
  }
}
