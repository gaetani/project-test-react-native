import type { Action } from '../actions/types';
import { DO_LOGIN } from '../actions/login';

export type State = {
    name: string
}

const initialState = {
  name: '',
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_USER) {
    return {
      ...state,
      name: action.payload,
    };
  }
  return state;
}