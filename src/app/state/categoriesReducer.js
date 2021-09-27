import Types from "./types";

const INITIAL_STATE = {
  data: false,
  loaded: false,
  error: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CATEGORIES_SUCCESS:
      return { loaded: true, data: action.payload, error: "" };
    case Types.GET_CATEGORIES_ERROR:
      return { ...state, error: action.payload, loaded: true };
    case Types.GET_CATEGORIES_REQUEST:
      return { ...state, loaded: false };
    case Types.CLEAN:
      return { error: false, loaded: false, data: false };
    default:
      return state;
  }
};
