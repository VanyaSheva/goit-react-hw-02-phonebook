import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ value, onFilter, contacts }) => (
  <>
    {contacts.length >= 2 && (
      <label className={styles.label}>
        Find contact by name:
        <input
          type="search"
          name="filter"
          value={value}
          onChange={onFilter}
        ></input>
      </label>
    )}
  </>
);

export default Filter;
