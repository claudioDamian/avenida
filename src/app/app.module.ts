import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTimelineModule } from 'ng-timeline';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VerticalTimelineModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
