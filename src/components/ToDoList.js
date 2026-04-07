import React from "react";

const ToDoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <input
              onChange={() => onToggle(item.id)}
              type="checkbox"
              checked={item.completed}
            />
            <span>{item.text}</span>
            <button onClick={() => onDelete(item.id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
