import { useEffect, useState } from "react";
import { pollId } from "../../store/weVote/weVote";
import VoteButton from "../vote-button/vote-button";

const AppContainer = ({ weVoteApi, websocketWeVoteApi, telegramBotName }) => {
  const [pollData, setPollData] = useState(null);

  useEffect(() => {
    weVoteApi.polls.find(pollId).then(setPollData);
    const handler = (data) => {
      if (data.id === pollId) {
        setPollData(data);
      }
    };
    websocketWeVoteApi.subscribeOnPollUpdate(pollId, handler);
    return () => websocketWeVoteApi.unsubscribeFromPollUpdate(pollId, handler);
  }, [pollId, weVoteApi.polls.find]);

  if (!pollData) {
    return <div>Poll {pollId} loading</div>;
  }
  return (
    <div>
      <div>Poll id: {pollData.id}</div>
      <div>Poll title: {pollData.title}</div>
      <div>Poll status: {pollData.status}</div>
      {pollData.questions.map((q, i) => {
        return (
          <div key={i}>
            <div>
              Question {i + 1}: {q.title}
            </div>
            {q.options.map((o, j) => {
              return (
                <div key={j}>
                  <div>
                    {o.title}: {o.result ?? 0}{" "}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <div>Voted: {pollData.voted ? "true" : "false"}</div>
      <div>Votes: {JSON.stringify(pollData.votes, null, 2)}</div>
      <VoteButton
        pollData={pollData}
        telegramBotName={telegramBotName}
        weVoteApi={weVoteApi}
        websocketWeVoteApi={websocketWeVoteApi}
        setPollData={setPollData}
      />
    </div>
  );
};

export default AppContainer