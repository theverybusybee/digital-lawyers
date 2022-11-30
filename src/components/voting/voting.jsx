import React, { useEffect, useState } from "react";
import VotingCards from "../voting-cards/voting-cards";
import styles from "./voting.module.css";
import { useSelector } from "react-redux";
import { pollId } from "../../store/weVote/weVote";

function Voting({ weVoteApi, websocketWeVoteApi }) {
  const [pollData, setPollData] = useState(null);
  const votingData = useSelector((state) => state.votingReducer);
  console.log(votingData)

  if (!votingData) {
    return <div>Poll {pollId} loading</div>;
  }

  return (
    votingData.title && (
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          {" "}
          <h2 className={styles.title}>{votingData.title}</h2>
          <ul className={styles.cardsContainer}>
            {votingData?.options.map((candidate, index) => {
              return (
                <VotingCards
                  pollData={votingData}
                  candidateData={candidate}
                  setPollData={setPollData}
                  weVoteApi={weVoteApi}
                  index={index}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </section>
    )
  );
}

export default Voting;
