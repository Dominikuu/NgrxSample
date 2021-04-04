import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CounterReducer } from "./libs/counter/counter.reducer";
import { reducers } from "src/app/libs/index";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { SecComponent } from "./sec/sec.component";
import { TodoState } from "./libs/todo/todo.state";
import { Store } from "./libs/todo/store";
import { TodoReducer } from "./libs/todo/todo.reducer";
import { TodoComponent } from "./todo/todo.component";
import { TodoEffects } from "./libs/todo/todo.effect";

@NgModule({
  declarations: [AppComponent, MyCounterComponent, SecComponent, TodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: TodoReducer }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  // providers: [{ provide: Store, useValue: new Store<TodoState>(TodoReducer) }],
  bootstrap: [AppComponent],
})
export class AppModule {}
