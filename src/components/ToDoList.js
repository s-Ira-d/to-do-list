import React from "react";
import styles from "./ToDoList.module.css";

const ToDoList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul className={styles.list}>
      {todos.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <div className={styles.left}>
              <input
                onChange={() => onToggle(item.id)}
                type="checkbox"
                checked={item.completed}
              />
              <span
                className={`${styles.text} ${
                  item.completed ? styles.completed : ""
                }`}
              >
                {item.text}
              </span>
            </div>

            <button className={styles.button} onClick={() => onDelete(item.id)}>
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
