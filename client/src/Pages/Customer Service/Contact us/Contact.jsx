import React from "react";

import PageHeader from "../../../Components/UI/PageHeader.jsx";
import styles from "./contact.module.css";

function Contact() {
  return (
    <main className={styles.contact}>
      <PageHeader title="Nous contacter" />
    </main>
  );
}

export default Contact;
