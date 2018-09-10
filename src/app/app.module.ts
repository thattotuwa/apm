import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PetModule } from './pet/pet.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    PetModule,
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
