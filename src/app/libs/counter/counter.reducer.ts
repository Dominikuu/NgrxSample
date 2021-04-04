import { createReducer, on } from "@ngrx/store";
import { createSelector } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";
import { initialState } from "./counter.state";

export const CounterReducer = createReducer(
  initialState,
  on(increment, (state): number => state + 1),
  on(decrement, (state): number => state - 1),
  on(reset, (state) => 0)
);
