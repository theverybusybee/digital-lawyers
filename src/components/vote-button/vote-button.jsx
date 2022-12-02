import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { pollId } from "../../store/weVote/weVote";
import styles from "./vote-button.module.css";
import TelegramLoginButton from "react-telegram-login";
import {
  SET_USER_DATA,
  SET_VOTING_RESPONSE,
} from "../../store/actions/user-data-reducer";

function VoteButton({
  weVoteApi,
  index,
  setPollData,
  isAuthorized,
  pollData,
  isVote,
  setVoteSent,
}) {
  const dispatch = useDispatch();
  const [bulletin, setBulletin] = useState([]);
  const votingOptions = useSelector((state) => state.votingReducer.options);
  const votingOptionsArr = useMemo(() => {
    return new Array(votingOptions.length).fill(0);
  }, [votingOptions.length]);

  const setIndexVote = () => {
    bulletin[index] = 1;
  };

  useEffect(() => {
    setBulletin(votingOptionsArr);
  }, [votingOptionsArr]);

  const onVote = async () => {
    setIndexVote();
    setBulletin([bulletin]);
    const nodeConfig = await weVoteApi.node.getNodeConfig();
    await weVoteApi.polls.vote({
      pollData,
      nodeConfig,
      bulletin: [bulletin],
      hasRemoteSeed: true,
    });
    setVoteSent(true);
  };

  if (!isAuthorized) {
    return (
      <a href="#telegramButton" className={`${styles.button} ${styles.btnToTop}`}>
        <p>Для голосования <br/> требуется авторизация</p>
      </a>
    );
  }

  return (
    <>
      {isVote ? (
        <button
          className={styles.button}
          disabled={true}
          type="submit"
          onClick={onVote}
        >
          Голос отправлен
        </button>
      ) : (
        <button className={styles.button} type="submit" onClick={onVote}>
          Оставить голос
        </button>
      )}
    </>
  );
}
export default VoteButton;
