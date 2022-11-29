import styles from "./voting-cards.module.css";
import { config } from "../app/app";
import VoteButton from "../vote-button/vote-button";

function VotingCards({ candidateData, weVoteApi, websocketWeVoteApi, pollData, setPollData, onVote, index }) {

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
       <VoteButton
          index={index}
          pollData={pollData}
          weVoteApi={weVoteApi}
          websocketWeVoteApi={websocketWeVoteApi}
          setPollData={setPollData}
        />
    </li>
  );
}

export default VotingCards;
