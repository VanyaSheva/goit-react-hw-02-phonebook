import React, { Fragment } from "react";
import styles from "./Contact.module.css";
const Contact = ({ name, number, onDelete }) => (
  <Fragment>
    <p className={styles.name}>{name}</p>
    <p className={styles.phone}>{number}</p>
    <button type="button" onClick={onDelete} className={styles.button}>
      Delete
    </button>
  </Fragment>
);

export default Contact;
