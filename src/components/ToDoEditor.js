import { Component } from "react";

class ToDoEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({ text: " " });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoEditor;
