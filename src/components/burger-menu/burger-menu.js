import styles from "./burger-menu.module.css";

function BurgerMenu({ onclick, state }) {
  return (
    <svg
      onClick={onclick}
      xmlns="http://www.w3.org/2000/svg"
      className={
        state
          ? `${styles.menu} ${styles.menuRotate} ${styles.menu4} ${styles.active}`
          : `${styles.menu} ${styles.menuRotate} ${styles.menu4}`
      }
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <path
        className={`${styles.line}  ${styles.top}`}
        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        stroke="#C6A67D"
        fill="none"
        strokeWidth="5.5px"
      ></path>
      <path
        className={`${styles.line}  ${styles.middle}`}
        d="m 70,50 h -25"
        stroke="#C6A67D"
        fill="none"
        strokeWidth="5.5px"
      ></path>
      <path
        className={`${styles.line} ${styles.bottom}`}
        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        stroke="#C6A67D"
        fill="none"
        strokeWidth="5.5px"
      ></path>
    </svg>
  );
}

export default BurgerMenu;
