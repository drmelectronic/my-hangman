import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanComponent } from './hangman/hangman.component';
import { LetraComponent } from './letra/letra.component';
import { KeyComponent } from './key/key.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    LetraComponent,
    KeyComponent
  ],
  exports:[
    AppComponent,
    HangmanComponent,
    LetraComponent,
    KeyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
