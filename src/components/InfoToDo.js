import React from "react";
import styles from "./InfoToDo.module.css";

const InfoToDo = ({ total, completed }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.item}>
          <span className={styles.label}>Всього задач</span>
          <span className={`${styles.value} ${styles.total}`}>{total}</span>
        </div>

        <div className={styles.item}>
          <span className={styles.label}>Виконано</span>
          <span className={`${styles.value} ${styles.completed}`}>
            {completed}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoToDo;
