import { useState } from "react";
import { pollId } from "../../store/weVote/weVote";
import styles from "./vote-button.module.css";
import TelegramLoginButton from "react-telegram-login";

function VoteButton({
  pollData,
  weVoteApi,
  websocketWeVoteApi,
  setPollData,
  index
}) {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isVoteSent, setVoteSent] = useState(false);
  const [bulletin, setbulletin] = useState([0,0,0,0]);
  const telegramBotName = 'we_vote_dev_bot' 

  const onAuth = async (user) => {
    const response = await weVoteApi.auth.loginTelegram(user, "ru");
    weVoteApi.authorize(response);
    websocketWeVoteApi.connect(response);
    setAuthorized(true);
    weVoteApi.polls.find(pollId).then(setPollData);
  };
  const setIndexVote = () => {
    if(index == 0) {
      setbulletin([1,0,0,0])
    }
    if(index == 1) {

      setbulletin([0,1,0,0])
    }
    if(index == 2) {

      setbulletin([0,0,1,0])
    }
    if(index == 3) {

      setbulletin([0,0,0,1])
    }
  }
console.log(bulletin)

  const onVote = async () => {
    setIndexVote()
    if(bulletin == [0,0,0,0]) {
      setIndexVote()
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
      <button className={styles.button} type="submit" onClick={onVote}>
        Оставить голос
      </button>
      {/* {isVoteSent && <div>Vote sent </div>} */}
    </>
  );
}
export default VoteButton;
