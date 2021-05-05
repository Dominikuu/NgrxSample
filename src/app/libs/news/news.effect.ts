import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, select, Store } from "@ngrx/store";
import { Observable, forkJoin } from "rxjs";
import {
  catchError,
  map,
  mergeMap,
  withLatestFrom,
  switchMap,
} from "rxjs/operators";
import { NewsState, News } from "./news.state";
import * as NewsActions from "./news.action";

@Injectable()
export class NewsEffects {
  constructor(
    private httpClient: HttpClient,
    private store: Store<{ news: NewsState }>,
    private action$: Actions
  ) {}

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(NewsActions.getNews),
      forkJoin([
        this.http.get("http://192.168.2.53:50800/blog"),
        this.http.get("http://192.168.2.53:50800/blog"),
      ]).pipe((res) => console.log(res))
    )
  );

  // fake HTTP client so we don't need a server for this example
  http = {
    get: (url: string): Observable<any[]> => {
      return this.httpClient.get(url).pipe(
        map((event) => {
          console.log(event);
          return [event];
        })
      );
    },
  };
}
