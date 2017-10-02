import { AlertModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { routes } from "./app.router";

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	FormsComponent,
  	],
  	imports: [
  	  BrowserModule,
  	  FormsModule,
  		routes,
  		AlertModule.forRoot()
  	],
  	bootstrap: [AppComponent]
})
export class AppModule { }
