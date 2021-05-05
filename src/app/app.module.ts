import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { NewsReducer } from "./libs/news/news.reducer";
import { NewsComponent } from "./news/news.component";
import { NewsEffects } from "./libs/news/news.effect";

@NgModule({
  declarations: [AppComponent, NewsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ news: NewsReducer }),
    EffectsModule.forRoot([NewsEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
