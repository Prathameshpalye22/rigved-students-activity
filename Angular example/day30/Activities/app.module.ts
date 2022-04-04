import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom-pipe';
import { FirstComponent } from './first/first.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { UserDataActivityComponent } from './user-data-activity/user-data-activity.component';
import { CustomTitle } from './user-data-activity/custom-pipe-use';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PipeDemoComponent,
    CustomPipe,
    StructuralDemoComponent,
    MyActivityComponent,
    UserDataActivityComponent,
    CustomTitle
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
