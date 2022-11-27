import { WeVoteApi } from '@wavesenterprise/we-vote-api';
import { WebsocketWeVoteApi } from '@wavesenterprise/we-vote-api/websocketApi';



const pollId = 4315
const telegramBotName = 'we_vote_dev_bot'
const config = {
  backendAddress: 'https://client.we.vote/backendAddress',
  nodeAddress: 'https://client.we.vote/nodeAddress',
  authServiceAddress: 'https://client.we.vote/votingAuthService',
  keysServiceAddress: 'https://client.we.vote/keysAddress',
  transactionFeeAssetId: '5EQ4iE4j4gRT4RvTBEHpkPoDfaeDq277aatEe4LS1Hnv',
}
const weVoteApi = new WeVoteApi(config)
const websocketApi = new WebsocketWeVoteApi(config)


