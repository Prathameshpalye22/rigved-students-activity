import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserlistComponent } from './user-list/user-list.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { UserUpdateComponent } from './user-update/user-update.component';

let route : Routes = [
  {path: "", component : UserStoreComponent},
  {path: "store", component : UserStoreComponent},
  {path: "usersList", component : UserlistComponent},
  {path:"delete", component: UserDeleteComponent},
  {path: "success/:uid", component:RegisterSuccessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserStoreComponent,
    UserDeleteComponent,
    RegisterSuccessComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }