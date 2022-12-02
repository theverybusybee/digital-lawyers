import React, { useState } from "react";
import VotingCards from "../voting-cards/voting-cards";
import styles from "./voting.module.css";
import { useDispatch, useSelector } from "react-redux";
import TelegramLoginButton from "react-telegram-login";
import { pollId } from "../../store/weVote/weVote";
import { SET_USER_DATA } from "../../store/actions/user-data-reducer";

function Voting({ weVoteApi, websocketWeVoteApi, getVote }) {
  const dispatch = useDispatch();
  const [pollData, setPollData] = useState(null);
  const [isAuthorized, setAuthorized] = useState(false);
  const [isVote, setVoteSent] = useState(false);
  const votingData = useSelector((state) => state.votingReducer);
  const telegramBotName = "we_vote_dev_bot";
  if (!votingData) {
    return <div>Poll {pollId} loading</div>;
  }

  const handleTelegramResponse = (response) => {
    dispatch({ type: SET_USER_DATA, payload: response });
  };

  const onAuth = async (user) => {
    const response = await weVoteApi.auth.loginTelegram(user, "ru");
    setAuthorized(true);
    weVoteApi.authorize(response);
    weVoteApi.polls.find(pollId).then((res) => {
      setPollData(res);
      handleTelegramResponse(res);
      if (res.voted === true) {
        setVoteSent(true);
      }
    });
  };

  const TelegramButton = () => {
    return (
      <div id='telegramButton' className={styles.telegramBtn}>
        <h4>Пожалуйста авторизуйтесь перед голосованием</h4>
        <TelegramLoginButton
          botName={telegramBotName}
          buttonSize={"large"}
          cornerRadius={0}
          lang={"ru"}
          usePic={true}
          dataOnauth={onAuth}
        />
      </div>
    );
  };

  return (
    votingData.title && (
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          {" "}
          <h2 className={styles.title}>{votingData.title}</h2>
          {!isAuthorized && <TelegramButton />}
          <ul className={styles.cardsContainer}>
            {votingData?.options.map((candidate, index) => {
              return (
                <VotingCards
                  getVote={getVote}
                  pollData={pollData}
                  candidateData={candidate}
                  setPollData={pollData}
                  weVoteApi={weVoteApi}
                  index={index}
                  key={index}
                  isAuthorized={isAuthorized}
                  isVote={isVote}
                  setVoteSent={setVoteSent}
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
