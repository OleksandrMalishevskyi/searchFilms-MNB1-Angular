import { MovieServiceClient } from './services/movie.service.client';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MovieServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
