import React, { Component } from 'react';

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
    return (
      <div>
        <h1>Todo List</h1>
      </div>
    );
  }
}

export default TodoList;
