import {
  SET_DONATUR_PERMOHONAN_DETAIL,
  SET_LATEST_PERMOHONAN,
  SET_SEARCH_PERMOHONAN_RESULT,
  SET_SELF_PERMOHONAN,
  SET_URGENT_PERMOHONAN,
} from './ActionTypes';

const initState = {
  latest: [],
  mostUrgent: [],
  searchResult: [],
  self: [],
  donaturDetail: null,
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LATEST_PERMOHONAN: {
      return {
        ...state,
        latest: payload,
      };
    }
    case SET_SELF_PERMOHONAN: {
      return {
        ...state,
        self: payload,
      };
    }
    case SET_SEARCH_PERMOHONAN_RESULT: {
      return {
        ...state,
        searchResult: payload,
      };
    }
    case SET_URGENT_PERMOHONAN: {
      return {
        ...state,
        mostUrgent: payload,
      };
    }
    case SET_DONATUR_PERMOHONAN_DETAIL: {
      return {
        ...state,
        donaturDetail: payload,
      };
    }
  }
};
