import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from "./app.module.css";
import Header from "../header/header";
import Voting from "../voting/voting";
import Footer from "../footer/Footer";
import {websocketApi} from '../../store/weVote/WebsocketWeVoteApi.jsx';
import {getVote} from '../../store/weVote/weVote.jsx';
import { WeVoteApi } from '@wavesenterprise/we-vote-api';
import { useDispatch, useSelector } from "react-redux";
import {ADD_VOTING_DATA} from '../../store/actions/actions.js';

   export const config = {
     backendAddress: "https://client.we.vote/backendAddress",
     nodeAddress: "https://client.we.vote/nodeAddress",
     authServiceAddress: "https://client.we.vote/votingAuthService",
     keysServiceAddress: "https://client.we.vote/keysAddress",
     transactionFeeAssetId: "5EQ4iE4j4gRT4RvTBEHpkPoDfaeDq277aatEe4LS1Hnv",
   };

function App() {
  const dispatch = useDispatch()
  const pollId = 4315
  const telegramBotName = 'we_vote_dev_bot';
  const weVoteApi = new WeVoteApi(config)
  
  
   const getVote = async () => { 
      const pollData = await weVoteApi.polls.find(pollId)
      // return console.log(pollData)
       return dispatch({ type: ADD_VOTING_DATA, payload: pollData })
    }


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
