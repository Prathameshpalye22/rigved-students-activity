import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NameFormatterPipe } from './name-formatter.pipe';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { Activity31Component } from './activity31/activity31.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NameFormatterPipe,
    EventBindingComponent,
    PropertyBindingComponent,
    Activity31Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
