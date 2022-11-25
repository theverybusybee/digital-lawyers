import { candidatesData } from "../utils/constants/candidates";
import VotingCards from "../voting-cards/voting-cards";
import styles from "./voting.module.css";

console.log(candidatesData);

function Voting() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Открыто народное голосование в номинации “За вклад в юридическую науку”
      </h2>
      <ul className={styles.cardsContainer}>
        {candidatesData.map((candidate, index) => {
          return <VotingCards candidateData={candidate} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Voting;
