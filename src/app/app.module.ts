import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/Input/input.component';
import { SelectComponent } from '../components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
