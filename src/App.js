import "./App.css";
import { Component } from "react";
import todosData from "./data/todo-data.json";
import ToDoList from "./components/ToDoList.js";
import ToDoEditor from "./components/ToDoEditor.js";
import InfoToDo from "./components/InfoToDo.js";
import FilterTodo from "./components/FilterToDo.js";

class App extends Component {
  state = {
    todos: todosData,
    filter: "",
  };

  addToDo = (text) => {
    const todo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    this.setState((prevTodos) => ({
      todos: [todo, ...prevTodos.todos],
    }));
  };

  deleteToDo = (id) => {
    this.setState((prevTodos) => ({
      todos: prevTodos.todos.filter((item) => item.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState((prevTodos) => ({
      todos: prevTodos.todos.map((item) =>
        item.id === id ? { ...item, completed: !item.competed } : item
      ),
    }));
  };

  getFilterTodo = () => {
    const { todos, filter } = this.state;
    return todos.filter((t) =>
      t.text.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { todos } = this.state;
    const completedCount = todos.filter((item) => item.completed).length;

    return (
      <div>
        <ToDoEditor onAdd={this.addToDo} />

        <ToDoList
          onDelete={this.deleteToDo}
          todos={this.getFilterTodo()}
          onToggle={this.toggleCompleted}
        />

        <InfoToDo total={todos.length} completed={completedCount} />

        <FilterTodo value={this.state.filter} onChange={this.changeFilter} />
      </div>
    );
  }
}

export default App;
