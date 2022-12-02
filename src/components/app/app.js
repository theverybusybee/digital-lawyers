import React, { useEffect } from "react";
import styles from "./app.module.css";
import Header from "../header/header";
import Voting from "../voting/voting";
import Footer from "../footer/Footer";
import { websocketApi } from "../../store/weVote/WebsocketWeVoteApi.jsx";
import {weVoteApi} from "../../store/weVote/weVote.jsx";
import { useDispatch } from "react-redux";
import { ADD_VOTING_DATA } from "../../store/actions/reducer.js";
import { pollId } from "../../store/weVote/weVote";

function App() {
  const dispatch = useDispatch();

  const getVote = async () => {
    const pollData = await weVoteApi.polls.find(pollId);
    return dispatch({ type: ADD_VOTING_DATA, payload: pollData });
  };


  useEffect(() => {
    getVote();
  }, [pollId, weVoteApi.polls.find]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Voting weVoteApi={weVoteApi} getVote={getVote} websocketWeVoteApi={websocketApi} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
