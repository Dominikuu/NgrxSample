import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, select, Store } from "@ngrx/store";
import { Observable, of, timer } from "rxjs";
import {
  catchError,
  map,
  concatMap,
  mergeMap,
  withLatestFrom,
  switchMap,
} from "rxjs/operators";
import { TodoState, Todo } from "./todo.state";
import * as ToDoActions from "./todo.action";

@Injectable()
export class TodoEffects {
  constructor(
    private store: Store<{ todos: TodoState }>,
    private action$: Actions
  ) {
    // this.action$
    //   .pipe(
    //     ofType("todoState"),
    //     filter((action) => action.todos.type === "ADD"),
    //     withLatestFrom(this.store.state$),
    //     mergeMap(([action, state]: [AddAction, AppState]) => {
    //       const todo = state.todoState.todos[state.todoState.todos.length - 1];
    //       return this.http.post<Todo>("/todos", todo);
    //     }),
    //     map(({ index }) => savedTodo({ index }))
    //   )
    //   .subscribe((action) => this.store.dispatch(action));
  }

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.getTodo),
      mergeMap((action) =>
        this.http.get("").pipe(
          map((data: any[]) => {
            return ToDoActions.getSuccessTodo({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.errorTodo(error));
          })
        )
      )
    )
  );
  CreateToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.addTodo),
      withLatestFrom(this.store.select("todos")),
      switchMap(([action, state]) => {
        console.log(action, state);
        return this.http
          .post("", { action, index: state.todos.length - 1 })
          .pipe(
            map(({ index }: any) => {
              // console.log(action);
              return ToDoActions.savedTodo({ index });
            }),
            catchError((error: Error) => {
              return of(ToDoActions.errorTodo(error));
            })
          );
      })
    )
  );

  // fake HTTP client so we don't need a server for this example
  http = {
    get: function <T>(url: string): Observable<Todo[]> {
      return timer(2000).pipe(
        map(() => [
          {
            index: 0,
            text: "hihihi",
            done: true,
            saved: true,
          },
        ])
      );
    },
    post: function <T>(url: string, payload: T): Observable<T> {
      console.log(payload);
      return timer(2000).pipe(map(() => payload));
    },
  };
}
