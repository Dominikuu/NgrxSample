import { createReducer, on, Action } from "@ngrx/store";
import { initialState, NewsState } from "./news.state";
import * as NewsActions from "./news.action";

export const reducer = createReducer(
  initialState,
  on(NewsActions.getNews),
  on(NewsActions.getSuccessNews, (state) => state)
);

export function NewsReducer(
  state: NewsState | undefined,
  action: Action
): NewsState {
  return reducer(state, action);
}
