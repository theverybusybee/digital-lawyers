import { WebsocketWeVoteApi } from '@wavesenterprise/we-vote-api/websocketApi';
import {config} from '../weVote/weVote.jsx';

export const websocketApi = new WebsocketWeVoteApi(config)