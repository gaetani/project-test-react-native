import type { Action } from './types';

export const DO_LOGIN = 'DO_LOGIN';

export function doLogin(user:string): Action {
  console.log(user);
  
  return {
    type: DO_LOGIN,
    payload: user,
  };
}