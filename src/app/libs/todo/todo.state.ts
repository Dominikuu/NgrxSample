export interface Todo {
  index: number;
  text: string;
  done: boolean;
  saved: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = { todos: [] };
