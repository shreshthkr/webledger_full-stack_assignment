import {
  GET_RANDOM_RECEPIE_ERROR,
  GET_RANDOM_RECEPIE_REQUEST,
  GET_RANDOM_RECEPIE_SUCCESS,
  GET_RECEPIE_DETAIL_ERROR,
  GET_RECEPIE_DETAIL_REQUEST,
  GET_RECEPIE_DETAIL_SUCCESS,
  GET_RECEPIE_ERROR,
  GET_RECEPIE_REQUEST,
  GET_RECEPIE_SUCCESS,
  GET_SAVED_RECEPIE_ERROR,
  GET_SAVED_RECEPIE_REQUEST,
  GET_SAVED_RECEPIE_SUCCESS,
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
      return { ...state, isLoading: false, recepie: payload };
    case GET_RECEPIE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const RandomInitialState = {
  isLoading: true,
  isError: false,
  Randomrecepie: [],
};

export const RandomRecepiereducer = (state = RandomInitialState, { type, payload }) => {
  switch (type) {
    case GET_RANDOM_RECEPIE_REQUEST:
      return { ...state, isLoading: true };
    case GET_RANDOM_RECEPIE_SUCCESS:
      return { ...state, isLOading: false, Randomrecepie: payload };
    case GET_RANDOM_RECEPIE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};


const DetailinitialState = {
  isLoading: true,
  isError: false,
  recepieDetail: [],
};

export const Detailreducer = (state = DetailinitialState, { type, payload }) => {
  switch (type) {
    case GET_RECEPIE_DETAIL_REQUEST:
      return { ...state, isLoading: true };
    case GET_RECEPIE_DETAIL_SUCCESS:
      return { ...state, isLoading: false, recepieDetail: payload };
    case GET_RECEPIE_DETAIL_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};


const SavedInitialState = {
  isLoading: true,
  isError: false,
  recepieSaved: [],
};

export const SavedReducer = (state = SavedInitialState, { type, payload }) => {
  switch (type) {
    case GET_SAVED_RECEPIE_REQUEST:
      return { ...state, isLoading: true };
    case GET_SAVED_RECEPIE_SUCCESS:
      return { ...state, isLoading: false, recepieSaved: payload };
    case GET_SAVED_RECEPIE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};