import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes'
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetDetailComponent,
    FilterPipe 
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
