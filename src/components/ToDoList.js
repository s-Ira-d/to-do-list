import React from "react";
import styles from "./ToDoList.module.css";

const ToDoList = ({ todos, onDelete, onToggle, getDuration }) => {
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

              <div>
                <span
                  className={`${styles.text} ${
                    item.completed ? styles.completed : ""
                  }`}
                >
                  {item.text}
                </span>

                {item.completed && getDuration && (
                  <small className={styles.time}>⏱ {getDuration(item)}</small>
                )}
              </div>
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
