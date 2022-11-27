import styles from "./app.module.css";
import Header from "../header/header";
import Voting from "../voting/voting";
import Footer from "../footer/Footer";
import { WeVoteApi } from '@wavesenterprise/we-vote-api'
import { WebsocketWeVoteApi } from '@wavesenterprise/we-vote-api/websocketApi'
import axios from 'axios';

function App() {
  const pollId = 4315
  const telegramBotName = 'we_vote_dev_bot'

// default config
const config = {
  backendAddress: 'https://client.we.vote/backendAddress',
  nodeAddress: 'https://client.we.vote/nodeAddress',
  authServiceAddress: 'https://client.we.vote/votingAuthService',
  keysServiceAddress: 'https://client.we.vote/keysAddress',
  transactionFeeAssetId: '5EQ4iE4j4gRT4RvTBEHpkPoDfaeDq277aatEe4LS1Hnv',
}
const weVoteApi = new WeVoteApi(config)
const websocketApi = new WebsocketWeVoteApi(config)


  
const onVote = async () => { 
  const pollData = await weVoteApi.polls
  return console.log(pollData)
}

onVote();

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
