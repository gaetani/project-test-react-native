export type Action =
   { type: 'DO_LOGIN', name: string}

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;