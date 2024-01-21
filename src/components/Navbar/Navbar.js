import { Link } from "react-router-dom";
import React from 'react'
import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <div><div className={styles.container}>
     <Link to="/" className={styles.section}>
      Home
    </Link>   
    <Link to="/tracker" className={styles.section}>
      Job Preparation
    </Link>
    <Link to="/questions" className={styles.section}>
      Core Subjects
    </Link>
  </div></div>
  )
}

export default Navbar