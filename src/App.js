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

  componentDidMount() {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      this.setState({
        todos: JSON.parse(savedTodos),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addToDo = (text) => {
    const todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now(),
      completedAt: null,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteToDo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((item) => item.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
              completedAt: !item.completed ? Date.now() : null,
            }
          : item
      ),
    }));
  };

  getTaskDuration = (todo) => {
    if (!todo.completed || !todo.completedAt) return null;

    const duration = todo.completedAt - todo.createdAt;

    const seconds = Math.floor(duration / 1000);
    const minutes = Math.floor(seconds / 60);

    return `${minutes}m ${seconds % 60}s`;
  };

  getFilterTodo = () => {
    const { todos, filter } = this.state;

    return todos.filter((t) =>
      t.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { todos, filter } = this.state;

    const completedCount = todos.filter((item) => item.completed).length;

    return (
      <div>
        <ToDoEditor onAdd={this.addToDo} />

        <ToDoList
          onDelete={this.deleteToDo}
          todos={this.getFilterTodo()}
          onToggle={this.toggleCompleted}
          getDuration={this.getTaskDuration}
        />

        <InfoToDo total={todos.length} completed={completedCount} />

        <FilterTodo value={filter} onChange={this.changeFilter} />
      </div>
    );
  }
}

export default App;
