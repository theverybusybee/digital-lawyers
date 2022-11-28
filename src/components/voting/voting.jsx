import React, { useEffect, useState } from "react";
import VotingCards from "../voting-cards/voting-cards";
import styles from "./voting.module.css";
import { useSelector } from "react-redux";
import { pollId } from "../../store/weVote/weVote";

function Voting({ weVoteApi, websocketWeVoteApi }) {
  const [pollData, setPollData] = useState(null);
  const votingData = useSelector((state) => state.votingReducer);

  useEffect(() => {
    weVoteApi.polls.find(pollId).then(setPollData);
    const handler = (data) => {
      if (data.id === pollId) {
        setPollData(data);
      }
    };
    websocketWeVoteApi.subscribeOnPollUpdate(pollId, handler);
    return () => websocketWeVoteApi.unsubscribeFromPollUpdate(pollId, handler);
  }, [pollId, weVoteApi.polls.find]);

  if (!pollData) {
    return <div>Poll {pollId} loading</div>;
  }

  console.log(votingData);

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
                  pollData={pollData}
                  candidateData={candidate}
                  setPollData={setPollData}
                  weVoteApi={weVoteApi}
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
