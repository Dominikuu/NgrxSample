import { Component, VERSION, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Todo, TodoState } from "src/app/libs/todo/todo.state";
import * as ToDoActions from "src/app/libs/todo/todo.action";
import { Observable } from "rxjs";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todos$: Observable<TodoState>;
  constructor(private store: Store<{ todos: TodoState }>) {
    this.todos$ = store.pipe(select("todos"));
  }

  ngOnInit(): void {
    this.store.dispatch(ToDoActions.getTodo());
  }

  add(text: string): void {
    this.store.dispatch(ToDoActions.addTodo({ text }));
  }

  toggle({ index }: Todo): void {
    this.store.dispatch(ToDoActions.toggleTodo({ index }));
  }
}
