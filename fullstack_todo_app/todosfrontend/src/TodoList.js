import React, { Component } from 'react';
import TodoItem from './TodoItem';
const APIURL = '/api/todos';

class TodoList extends Component {
  state = {
    todos: []
  };

  componentWillMount() {
    this.loadTodos();
  }

  loadTodos = () => {
    // proxy in package.json
    fetch(APIURL)
      .then((resp) => {
        // error handling
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then((data) => {
              let err = { errorMessage: data.message };
              throw err;
            });
          } else {
            let err = {
              errorMessage: 'Please try again. Server did not respond'
            };
            throw err;
          }
        }
        return resp.json();
      })
      .then((todos) => this.setState({ todos }));
  };

  render() {
    const todos = this.state.todos.map((t) => <TodoItem key={t._id} {...t} />);
    return (
      <div>
        <h1>Todo List</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
