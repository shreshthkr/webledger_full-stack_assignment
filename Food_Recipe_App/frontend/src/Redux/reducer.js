import {
  GET_RECEPIE_ERROR,
  GET_RECEPIE_REQUEST,
  GET_RECEPIE_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: true,
  isError: false,
  recepie: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECEPIE_REQUEST:
      return { ...state, isLoading: true };
    case GET_RECEPIE_SUCCESS:
      return { ...state, isLOading: false, recepie: payload };
    case GET_RECEPIE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
