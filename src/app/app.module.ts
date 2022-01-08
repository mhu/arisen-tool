import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterSearchComponent } from './components/monster-search/monster-search.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItemAssessComponent } from './components/item-assess/item-assess.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterSearchComponent,
    ContactComponent,
    ItemAssessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
