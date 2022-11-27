import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from "./app.module.css";
import Header from "../header/header";
import Voting from "../voting/voting";
import Footer from "../footer/Footer";
import {websocketApi} from '../../store/weVote/WebsocketWeVoteApi.jsx'
import axios from 'axios';
import {getVote} from '../../store/weVote/weVote.jsx';
export const pollId = 163
function App() {
  const telegramBotName = 'we_vote_dev_bot'
  websocketApi.connect()

  useEffect(() => {
    getVote();
  const handler = (data) => {
    if (data.id === pollId) {
      console.log('pppp')
    }
  }
  websocketApi.subscribeOnPollUpdate(pollId, handler)
  return () => websocketApi.unsubscribeFromPollUpdate(pollId, handler)
}, [pollId])
    
      
    

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Voting />
      </main>
      <Footer />
    </div>
  );
}

export default App;
