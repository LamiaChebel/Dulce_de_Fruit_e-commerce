import React from "react";

import Navbar from "./Navbar.jsx";

import styles from "../admin.module.css";

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <Navbar />
    </main>
  );
}

export default Dashboard;
