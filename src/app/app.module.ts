import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegisterationComponent } from './travel-registeration/travel-registeration.component';
import { SearchPlacesComponent } from './search-places/search-places.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegisterationComponent,
    SearchPlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
