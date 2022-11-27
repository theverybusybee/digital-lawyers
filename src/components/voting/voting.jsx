import React, { useEffect, useState } from 'react';
import { candidatesData } from "../utils/constants/candidates";
import VotingCards from "../voting-cards/voting-cards";
import styles from "./voting.module.css";
import TelegramLoginButton from 'react-telegram-login';



function Voting() {
  const [pollData, setPollData] = useState(null)
  const handleTelegramResponse = response => {
    console.log(response);
  };

  // useEffect(() => {
  //   websocketApi.connect()
  //   weVoteApi.polls.find(pollId)
  //     .then((setPollData))
  //   const handler = (data) => {
  //     if (data.id === pollId) {
  //       setPollData(data)
  //     }
  //   }
  //   websocketApi.subscribeOnPollUpdate(pollId, handler)
  //   return () => websocketApi.unsubscribeFromPollUpdate(pollId, handler)
  // },[])
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
      <TelegramLoginButton dataOnauth={handleTelegramResponse} botName={''} />
    </section>
  );
}

export default Voting;
