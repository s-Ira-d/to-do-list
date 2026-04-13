import { Component } from "react";
import styles from "./ToDoEditor.module.css";

class ToDoEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length !== 0) {
      this.props.onAdd(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button className={styles.button}>Add</button>
      </form>
    );
  }
}

export default ToDoEditor;
