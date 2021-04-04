import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  increment,
  decrement,
  reset,
} from "src/app/libs/counter/counter.actions";
import { AppState } from "src/app/libs/index";

// interface AppState {
//   count: number;
// }

@Component({
  selector: "app-my-counter",
  templateUrl: "./my-counter.component.html",
  styleUrls: ["./my-counter.component.css"],
})
export class MyCounterComponent {
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select("counterState"));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
