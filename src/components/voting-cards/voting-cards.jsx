import styles from "./voting-cards.module.css";
import { config } from "../app/app";
import VoteButton from "../vote-button/vote-button";
import telegramBotName from "react-telegram-login";

function VotingCards({ candidateData, weVoteApi, websocketWeVoteApi, pollData, setPollData }) {
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
          pollData={pollData}
          telegramBotName={telegramBotName}
          weVoteApi={weVoteApi}
          websocketWeVoteApi={websocketWeVoteApi}
          setPollData={setPollData}
        />
    </li>
  );
}

export default VotingCards;
