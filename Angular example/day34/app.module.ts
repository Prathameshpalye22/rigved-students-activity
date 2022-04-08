import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
import { TdfValidationDemoComponent } from './tdf-validation-demo/tdf-validation-demo.component';
import { TdfValidation2Component } from './tdf-validation2/tdf-validation2.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfDemoComponent,
    TdfValidationDemoComponent,
    TdfValidation2Component,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
