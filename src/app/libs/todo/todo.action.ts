import { createAction, props, Action } from "@ngrx/store";
import { Todo } from "./todo.state";

export enum TodoActionType {
  Get = "GET",
  GetSuccess = "GET_SUCCESS",
  Add = "ADD",
  Toggle = "TOGGLE",
  Saved = "SAVED",
  Error = "ERROR",
}

export const getTodo = createAction(TodoActionType.Get);

export const getSuccessTodo = createAction(
  TodoActionType.GetSuccess,
  props<{ payload: Todo[] }>()
);

export const addTodo = createAction(
  TodoActionType.Add,
  props<{ text: string }>()
);

export const toggleTodo = createAction(
  TodoActionType.Toggle,
  props<{ index: number }>()
);

export const savedTodo = createAction(
  TodoActionType.Saved,
  props<{ index: number }>()
);

export const errorTodo = createAction(TodoActionType.Error, props<Error>());

export interface AddAction extends Action {
  type: "ADD";
  text: string;
}

// export function addTodo(text: string): AddAction {
//   return {
//     text,
//     type: "ADD",
//   };
// }

// export interface ToggleAction extends Action {
//   type: "TOGGLE";
//   index: number;
// }

// export function toggleTodo(index: number): ToggleAction {
//   return {
//     index,
//     type: "TOGGLE",
//   };
// }

// export interface SavedAction extends Action {
//   type: "SAVED";
//   index: number;
// }

// export function savedTodo(index: number): SavedAction {
//   return {
//     index,
//     type: "SAVED",
//   };
// }
