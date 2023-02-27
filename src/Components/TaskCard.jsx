import React, { Component } from 'react'

export default class TaskCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.task.action}</h1>
        <h3>{this.props.task.id}</h3>
        <button onClick={()=>this.props.handleDelete(this.props.task.id)}>Delete</button>
        <button onClick={()=>this.props.handleComplete(this.props.task.id)}>{this.props.task.isDone?"Undo":"Complete"}</button>
      
      <hr /></div>
    )
  }
}
