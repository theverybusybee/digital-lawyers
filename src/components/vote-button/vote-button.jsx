
import { useState } from "react";
import { pollId } from "../../store/weVote/weVote";
import styles from "./vote-button.module.css";
import TelegramLoginButton from "react-telegram-login";
import { useDispatch } from "react-redux";
import { SET_USER_DATA } from "../../store/actions/user-data-reducer";
import { ADD_VOTING_DATA } from "../../store/actions/reducer.js";

function VoteButton({
  pollData,
  weVoteApi,
  websocketWeVoteApi,
  setPollData,
  index,
}) {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isVoteSent, setVoteSent] = useState(false);
  const [bulletin, setBulletin] = useState([0, 0, 0, 0]);
  const telegramBotName = "we_vote_dev_bot";
  const dispatch = useDispatch();
  const getVote = async () => {
    const pollData = await weVoteApi.polls.find(pollId);
    return dispatch({ type: ADD_VOTING_DATA, payload: pollData });
  };
  // const handleTelegramResponse = (response) => {
  //   dispatch({ type: SET_USER_DATA, payload: response });
  // };

  const onAuth = async (user) => {
    const response = await weVoteApi.auth.loginTelegram(user, "ru");
    weVoteApi.authorize(response);
    websocketWeVoteApi.connect(response);
    setAuthorized(true);
    weVoteApi.polls.find(pollId).then(setPollData);
    getVote()
  };

  const setIndexVote = () => {
    if (index === 0) {
      setBulletin([1, 0, 0, 0]);
    }
    if (index === 1) {
      setBulletin([0, 1, 0, 0]);
    }
    if (index === 2) {
      setBulletin([0, 0, 1, 0]);
    }
    if (index === 3) {
      setBulletin([0, 0, 0, 1]);
    }
  };

  const onVote = async () => {
    setIndexVote();
    if (bulletin == [0, 0, 0, 0]) {
      setIndexVote();
    }
    const nodeConfig = await weVoteApi.node.getNodeConfig();
    await weVoteApi.polls.vote({
      pollData,
      nodeConfig,
      bulletin: [bulletin],
      hasRemoteSeed: true,
    });
    setVoteSent(true);
  };

  if (isAuthorized) {
    return (
      <TelegramLoginButton
        botName={telegramBotName}
        buttonSize={"large"}
        cornerRadius={0}
        lang={"ru"}
        usePic={false}
        dataOnauth={onAuth}
      />
    );
  }

  return (
    <>
      {isVoteSent?  
      <button className={styles.button} disabled={true} type="submit" onClick={onVote}>
      Голос отправлен
    </button>
    :
    <button className={styles.button} type="submit" onClick={onVote}>
    Оставить голос
  </button>}
    </>
  );
}
export default VoteButton;
