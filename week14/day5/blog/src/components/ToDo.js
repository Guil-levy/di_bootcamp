import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTask: '',
    };
  }

  renderToDos = (e) => {
    const { todos, currentTask } = this.state;
    if (e.key =="Enter"){
    if (currentTask !== '') {
      this.setState({
        todos: [...todos, currentTask],
        currentTask: '',
      });
    }}
  };

  handleInputChange = (e) => {
    
    this.setState({ currentTask: e.target.value });
  };

  deleteTask = (pos) => {
    const updatedTodos = this.state.todos.filter((task, i) => i !== pos);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div>
          <ul>
          {this.state.todos.map((task, i) => (
            <li key={i} onClick={() => this.deleteTask(i)}>
              Task {i + 1}: {task}
            </li>
          ))}
        </ul>
        <p>Add a new todo:</p>
        <input
          type="text"
          value={this.state.currentTask}
          onInput={this.handleInputChange}
          placeholder="Enter your task here"
          onKeyDown={this.renderToDos}
        />
       
        
        
      </div>
    );
  }
}

export default Todo;

