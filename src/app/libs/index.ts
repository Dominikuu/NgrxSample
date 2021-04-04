import { ActionReducerMap } from "@ngrx/store";
import { CounterReducer } from "./counter/counter.reducer";

import { TodoReducer } from "./todo/todo.reducer";
import { TodoState } from "./todo/todo.state";

export interface AppState {
  counterState: number;
  todoState: TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  counterState: CounterReducer,
  todoState: TodoReducer,
};
