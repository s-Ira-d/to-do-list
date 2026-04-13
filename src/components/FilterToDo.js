import React from "react";
import styles from "./FilterToDo.module.css";

export const FilterToDo = (props) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
        placeholder="Search tasks..."
      />
    </div>
  );
};

export default FilterToDo;
