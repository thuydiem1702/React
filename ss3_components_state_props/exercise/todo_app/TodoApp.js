import React, { Component } from "react";

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            todos: []
        };
    }
    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };
    handleAddTodo = () => {
        const newTodo = { text: this.state.inputValue, completed: false };
        this.setState({ todos: [...this.state.todos, newTodo], inputValue: "" });
    };

    handleDeleteTodo = (index) => {
        const todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({ todos });
    };

    handleCompleteTodo = (index) => {
        const todos = [...this.state.todos];
        todos[index].completed = !todos[index].completed;
        this.setState({ todos });
    };

    render() {
        const { inputValue, todos } = this.state;

        return (
            <div>
                <h1>Todo App</h1>
                <div>
                    <input type="text" value={inputValue} onChange={this.handleInputChange} />
                    <button onClick={this.handleAddTodo}>Add Todo</button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <span
                                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                                onClick={() => this.handleCompleteTodo(index)}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => this.handleDeleteTodo(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default TodoApp;