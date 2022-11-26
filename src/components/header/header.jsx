import styles from "./header.module.css";
import { ReactComponent as MDSLogo } from "../../images/logos/logo.svg";
import { ReactComponent as Bonnet } from "../../images/logos/bonnet.svg";
import { ReactComponent as Web3Tech } from "../../images/logos/web3-tech.svg";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../burger-menu/burger-menu";
import { useState } from "react";

function Header() {

  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTop}>
          <MDSLogo className={styles.logo} />
          <ul className={styles.linksContainer}>
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
          </ul>

          <BurgerMenu onclick={toggleMenu} state={menuState} />
        </div>

        <div className={styles.headerBottom}>
          <div className={styles.logosContainer}>
            <Bonnet className={`${styles.img} ${styles.bonnet}`} />
            <Web3Tech className={styles.img} />
          </div>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading}>Народное голосование</h1>
            <p className={styles.reminder}>
              Голосование организованно с использованием блокчейн-сервиса
              WE.Vote
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
