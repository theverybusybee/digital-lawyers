import styles from "./voting-cards.module.css";

function VotingCards({ candidateData }) {
  return (
    <li className={styles.card}>
      <img className={styles.photo} src={candidateData.photo} alt={candidateData.name} />
      <div className={styles.content}>
        <p className={styles.name}>{candidateData.name}</p>
        <p className={styles.description}>{candidateData.description}</p>
      </div>

      <a
        className={styles.link}
        rel="noreferrer"
        target="_blank"
        href="https://t.me/+TCab2uFtiARmY2Yy"
      >
        Оставить голос
      </a>
    </li>
  );
}

export default VotingCards;
