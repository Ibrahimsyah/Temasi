import { SUBMIT_PERMOHONAN } from './ActionTypes';

export const submitPermohonan = payload => {
  return {
    type: SUBMIT_PERMOHONAN,
    payload,
  };
};
