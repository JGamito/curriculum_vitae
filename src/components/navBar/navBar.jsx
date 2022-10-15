import React from "react";
import styles from "./navBar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <a className={styles.a} href="#Projects">
            Projects
          </a>
        </div>
        <div>
          <a className={styles.a} href="#example">
            Technologies
          </a>
        </div>
        <div>
          <a className={styles.a} href="#example">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
