import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LmsComponent } from './lms/lms.component';
import{GetloanService}from './getloan.service';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

   
    

  ],
  providers: [GetloanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
