import { WeVoteApi } from '@wavesenterprise/we-vote-api';




export const pollId = 163
const telegramBotName = 'we_vote_dev_bot'
export const config = {
  backendAddress: 'https://client.we.vote/backendAddress',
  nodeAddress: 'https://client.we.vote/nodeAddress',
  authServiceAddress: 'https://client.we.vote/votingAuthService',
  keysServiceAddress: 'https://client.we.vote/keysAddress',
  transactionFeeAssetId: '5EQ4iE4j4gRT4RvTBEHpkPoDfaeDq277aatEe4LS1Hnv',
}
const weVoteApi = new WeVoteApi(config)


export const getVote = async () => { 
    const pollData = await weVoteApi.polls.find(pollId)
    return console.log(pollData)
  }
