import React, { useEffect, useState } from 'react';
import { candidatesData } from "../utils/constants/candidates";
import VotingCards from "../voting-cards/voting-cards";
import styles from "./voting.module.css";
import TelegramLoginButton from 'react-telegram-login';
import { useDispatch, useSelector } from "react-redux";

const telegramBotName = 'we_vote_dev_bot'

function Voting() {
  const [pollData, setPollData] = useState(null)
  const votingData = useSelector((state) => state.votingReducer);
  const handleTelegramResponse = response => {
    console.log(response);
  };

  console.log(votingData)

  return (votingData.title &&
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        {" "}
        <h2 className={styles.title}>{votingData.title}</h2>
        <ul className={styles.cardsContainer}>
          {votingData?.options.map((candidate, index) => {
            return <VotingCards candidateData={candidate} key={index} />;
          })}
        </ul>
      </div>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName={'we_vote_dev_bot'}
      />
    </section>
  );
}

export default Voting;
