import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

function NavBar() {
  return (
    <>
      <li className={styles.listItem}>
        <NavLink
          className={styles.link}
          activeClassName={styles.selectedLink}
          to="/"
        >
          Как это было
        </NavLink>
      </li>
      <li className={styles.listItem}>
        {" "}
        <NavLink
          className={styles.link}
          activeClassName={styles.selectedLink}
          to="/"
        >
          Номинации
        </NavLink>
      </li>
      <li className={styles.listItem}>
        {" "}
        <NavLink
          className={styles.link}
          activeClassName={styles.selectedLink}
          to="/"
        >
          Народное голосование
        </NavLink>
      </li>
      <li className={styles.listItem}>
        {" "}
        <NavLink
          className={styles.link}
          activeClassName={styles.selectedLink}
          to="/"
        >
          Новости
        </NavLink>
      </li>
      <li className={styles.listItem}>
        {" "}
        <NavLink
          className={styles.link}
          activeClassName={styles.selectedLink}
          to="/"
        >
          Наши партнеры
        </NavLink>
      </li>
    </>
  );
}

export default NavBar;
