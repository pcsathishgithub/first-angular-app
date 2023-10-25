import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { LogTestComponent } from "./shared/log-test/log-test.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routing.module";
import { HousingLocationComponent } from "./housing-location/housing-location.component";
import { LogService } from "./shared/log.service";



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent, HomeComponent, HousingLocationComponent, LogTestComponent 
  ],
  providers: [LogService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/