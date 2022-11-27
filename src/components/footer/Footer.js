import React from "react";
import styles from "../footer/Footer.module.css";
import logo from "../../images/logo.png";
import button from "../../images/button.png";
import { ReactComponent as Tg } from "../../images/tg.svg";
import { ReactComponent as Vk } from "../../images/vk.svg";
import { ReactComponent as Yt } from "../../images/yt.svg";

function Footer() {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,})
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {" "}
        <div className={styles.grid}>
            <img onClick={scrollUp} className={styles.button} src={button} />
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.contest}>
            <h3 className={styles.title}>О конкурсе</h3>
            <p className={styles.text}>
              Премия “Цифровой юрист года” – это общенациональная награда,
              поощряющая заслуги юристов и адвокатов в области цифрового и
              информационного права
            </p>
          </div>
          <nav className={styles.siteMap}>
            <ul className={styles.navigation}>
              <h3 className={styles.title}>Карта сайта</h3>
              <li className={styles.text}>Как это было</li>
              <li className={styles.text}>Номинации</li>
              <li className={styles.text}>Народное голосование</li>
              <li className={styles.text}>Новости</li>
              <li className={styles.text}>Регламент</li>
              <li className={styles.text}>Наши партнеры</li>
            </ul>
          </nav>
          <div className={styles.info}>
            <h4 className={styles.phone}>+7 (495) 128-49-50</h4>
            <a className={styles.email} href="">
              award@digital-lawyers.ru
            </a>
          </div>
          <div className={styles.nameplates}>
            <div className={styles.linkContainer}>
              <Tg />
              <Vk />
              <Yt />
            </div>
          </div>
        </div>
        <div className={styles.note}>
          <div className={styles.noteContainer}>
            <p className={styles.noteText}>
              © ООО «Диджитал Скиллс» 2019-2022 года. Все права защищены. Любое
              использование либо копирование материалов или подборки материалов
              сайта, элементов дизайна и оформления может осуществляться лишь с
              письменного согласия ООО «Диджитал Скиллс» и только при наличии
              ссылки на настоящий сайт.
            </p>
            <div className={styles.privacyPolicy}>
              <p className={styles.privacyPolicyText}>
                Политика конфиденциальности
              </p>
              <p className={styles.privacyPolicyText}>
                Разработка сайта - Синектика
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
