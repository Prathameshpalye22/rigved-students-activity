import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { FormGroupDemoComponent } from './form-group-demo/form-group-demo.component';
import { BuilderDemoComponent } from './builder-demo/builder-demo.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlDemoComponent,
    FormGroupDemoComponent,
    BuilderDemoComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
