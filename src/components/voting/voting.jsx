import { candidatesData } from "../utils/constants/candidates";
import VotingCards from "../voting-cards/voting-cards";
import styles from "./voting.module.css";
import TelegramLoginButton from 'react-telegram-login';

console.log(candidatesData);

function Voting() {
  const handleTelegramResponse = response => {
    console.log(response);
  };
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        {" "}
        <h2 className={styles.title}>
          Открыто народное голосование в номинации “За вклад в юридическую
          науку”
        </h2>
        <ul className={styles.cardsContainer}>
          {candidatesData.map((candidate, index) => {
            return <VotingCards candidateData={candidate} key={index} />;
          })}
        </ul>
      </div>
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="we_vote_bot" />
      
    </section>
  );
}

export default Voting;
