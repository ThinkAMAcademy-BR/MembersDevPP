import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { FilterCardInputComponent } from './filter-card-input/filter-card-input.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    FilterCardInputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
