import styles from "./voting-cards.module.css";
import { config } from "../app/app";

function VotingCards({ candidateData }) {
console.log(candidateData);

  return (
    <li className={styles.card}>
      <img
        className={styles.photo}
        src={`${config.backendAddress}\\${candidateData.image.link}`}
        alt={candidateData.title}
      />
      <div className={styles.content}>
        <p className={styles.name}>{candidateData.title}</p>
        <p className={styles.description}>{candidateData.description}</p>
      </div>

      <button className={styles.button} type="submit">
        Оставить голос
      </button>
    </li>
  );
}

export default VotingCards;
