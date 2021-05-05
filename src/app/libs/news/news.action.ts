import { createAction, props, Action } from "@ngrx/store";
import { News } from "./news.state";

export enum NewsActionType {
  Get = "GET",
  GetSuccess = "GET_SUCCESS",
}

export const getNews = createAction(NewsActionType.Get);

export const getSuccessNews = createAction(
  NewsActionType.GetSuccess,
  props<{ payload: News[] }>()
);
