import styles from "./voting-cards.module.css";

function VotingCards({ candidateData }) {
  return (
    <li className={styles.card}>
      <img
        className={styles.photo}
        src={candidateData.photo}
        alt={candidateData.name}
      />
      <div className={styles.content}>
        <p className={styles.name}>{candidateData.name}</p>
        <p className={styles.description}>{candidateData.description}</p>
      </div>

      <button className={styles.button} type="submit">
        Оставить голос
      </button>
    </li>
  );
}

export default VotingCards;
