export type ITsarAction<R, S, A> = (
  payload: any
) => (getState: () => S, actions: A) => R;

export interface ITsarActions<S> {
  [s: string]: ITsarAction<S | Promise<S>, S, ITsarActions<S>>;
}

export interface IState {
  [s: string]: any;
}

export interface IAction {
  type: string;
  payload?: any;
}

export const actionsToReducer = <S>(actions: ITsarActions<S>) => (
  state: S,
  action: IAction
) => {
  const getState = () => state;
  const { type, payload } = action;
  const tsarAction = actions[type];
  return tsarAction ? tsarAction(payload)(getState, actions) : state;
};
