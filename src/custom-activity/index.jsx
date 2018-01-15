import React, {Component} from 'react';

import TodoDisplay from './TodoDisplay';

class CustomActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo: '',
      nextTodoKey: 1,
      todos: []
    };

    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickDone = this.handleClickDone.bind(this);
  }

  handleChangeCurrent(e) {
    this.setState({
      currentTodo: e.target.value
    });
  }

  handleClickAdd() {
    const {currentTodo, nextTodoKey, todos} = this.state;
    todos.push({
      name: currentTodo,
      completed: false,
      key: nextTodoKey
    });
    this.setState({
      currentTodo: '',
      nextTodoKey: nextTodoKey + 1,
      todos
    });
  }

  handleClickDone(todo) {
    const {todos} = this.state;
    const todoIndex = todos.findIndex((t) => t.key === todo.key);
    if (todoIndex !== -1) {
      todos[todoIndex].completed = !todos[todoIndex].completed;
      this.setState({todos});
    }
  }

  render() {
    const mainStyle = {
      padding: '10px'
    };

    const todos = this.state.todos.map((todo) => (
      <li key={todo.key}>
        <TodoDisplay todo={todo} onDone={this.handleClickDone} />
      </li>
    ));

    return (
      <div style={mainStyle}>
        <div>
          <input
            onChange={this.handleChangeCurrent}
            placeholder="Add Todo"
            value={this.state.currentTodo}
          />
          <button onClick={this.handleClickAdd}>Add</button>
        </div>
        <ul>
          {
            todos
          }
        </ul>
      </div>
    );
  }
}

export default CustomActivity;
