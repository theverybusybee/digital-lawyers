import React, { useEffect } from "react";
import styles from "./app.module.css";
import Header from "../header/header";
import Voting from "../voting/voting";
import Footer from "../footer/Footer";
import { websocketApi } from "../../store/weVote/WebsocketWeVoteApi.jsx";
import {weVoteApi} from "../../store/weVote/weVote.jsx";
import { useDispatch } from "react-redux";
import { ADD_VOTING_DATA } from "../../store/actions/reducer.js";

export const config = {
  backendAddress: "https://client.we.vote/backendAddress",
  nodeAddress: "https://client.we.vote/nodeAddress",
  authServiceAddress: "https://client.we.vote/votingAuthService",
  keysServiceAddress: "https://client.we.vote/keysAddress",
  transactionFeeAssetId: "5EQ4iE4j4gRT4RvTBEHpkPoDfaeDq277aatEe4LS1Hnv",
};

function App() {
  const dispatch = useDispatch();
  const pollId = 4315;

  const getVote = async () => {
    const pollData = await weVoteApi.polls.find(pollId);
    return dispatch({ type: ADD_VOTING_DATA, payload: pollData });
  };


  useEffect(() => {
    getVote();
  }, [pollId]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Voting weVoteApi={weVoteApi} websocketWeVoteApi={websocketApi} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
