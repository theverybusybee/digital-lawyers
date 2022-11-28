import {ADD_VOTING_DATA} from '../actions/actions.js'

const initialState = {
  title: '',
  options: null,
  id: 0,
}

const votingReducer = (
  state = initialState, action) => {
  switch (action.type) {
    case ADD_VOTING_DATA: {
      return {
        ...state,
        title: action.payload.questions[0].title,
        options: action.payload.questions[0].options,
        id: action.payload.id,
      };
    }
    default:
      return state;
  }
}

export default votingReducer;