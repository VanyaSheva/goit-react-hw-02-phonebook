import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.listItem}>
        <Contact {...contact} onDelete={() => onDeleteContact(contact.id)} />
      </li>
    ))}
  </ul>
);

export default ContactsList;
