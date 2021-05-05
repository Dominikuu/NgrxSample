import { Component, VERSION, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { News, NewsState } from "src/app/libs/news/news.state";
import * as ToDoActions from "src/app/libs/news/news.action";
import { Observable } from "rxjs";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  news$: Observable<NewsState>;
  constructor(private store: Store<{ news: NewsState }>) {
    this.news$ = store.pipe(select("news"));
  }

  ngOnInit(): void {
    this.store.dispatch(ToDoActions.getNews());
  }
}
