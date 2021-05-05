import { ActionReducerMap } from "@ngrx/store";
import { NewsReducer } from "./news/news.reducer";
import { NewsState } from "./news/news.state";

export interface AppState {
  NewsState: NewsState;
}

export const reducers: ActionReducerMap<AppState> = {
  NewsState: NewsReducer,
};
