import { createReducer, on, Action } from "@ngrx/store";
import { initialState, TodoState } from "./todo.state";
import * as TodoActions from "./todo.action";

export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, action) => ({
    todos: [
      ...state.todos,
      {
        index: state.todos.length,
        text: action.text,
        done: false,
        saved: false,
      },
    ],
  })),
  on(TodoActions.toggleTodo, (state, action) => ({
    todos: state.todos.map((todo, index) => {
      if (index === action.index) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    }),
  })),
  on(TodoActions.savedTodo, (state, action) => {
    console.log(state, action);
    return {
      todos: state.todos.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            saved: true,
          };
        }
        return todo;
      }),
    };
  }),
  on(TodoActions.getSuccessTodo, (state, action) => ({
    todos: action.payload,
  })),
  on(TodoActions.getTodo, (state) => state)
);

export function TodoReducer(
  state: TodoState | undefined,
  action: Action
): TodoState {
  return reducer(state, action);
}
