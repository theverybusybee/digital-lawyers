import { useState } from "react";
import { pollId } from "../../store/weVote/weVote";
import styles from "./vote-button.module.css";

function VoteButton({
  pollData,
  weVoteApi,
  websocketWeVoteApi,
  telegramBotName,
  setPollData,
}) {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isVoteSent, setVoteSent] = useState(false);

  const onAuth = async (user) => {
    const response = await weVoteApi.auth.loginTelegram(user, "ru");
    weVoteApi.authorize(response);
    websocketWeVoteApi.connect(response);
    setAuthorized(true);
    weVoteApi.polls.find(pollId).then(setPollData);
  };

  console.log(weVoteApi);

  const onVote = async () => {
    const nodeConfig = await weVoteApi.node.getNodeConfig();
    await weVoteApi.polls.vote({
      pollData,
      nodeConfig,
      bulletin: [[1, 0, 0]],
      hasRemoteSeed: true,
    });
    setVoteSent(true);
  };

  // if (!isAuthorized) {
  //   return (
  //     <TelegramLoginButton
  //       botName={telegramBotName}
  //       buttonSize={"large"}
  //       cornerRadius={0}
  //       lang={"ru"}
  //       usePic={false}
  //       dataOnauth={onAuth}
  //     />
  //   );
  // }

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
