import {
  SET_USER_DATA,
  SET_ON_AUTH,
  SET_IS_VOTED,

} from "../actions/user-data-reducer";

const initialState = {
  userData: {},
  onAuth: false,
  isVoted: false,
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userData: { ...state, userData: action.payload },
      };
    }
    case SET_ON_AUTH: {
      return {
        ...state,
        userData: { ...state, onAuth: true },
      };
    }
    case SET_IS_VOTED: {
      return {
        ...state,
        userData: { ...state, isVoted: action.payload.result.voted },
      };
    }
    default:
      return state;
  }
};

export default userDataReducer;
