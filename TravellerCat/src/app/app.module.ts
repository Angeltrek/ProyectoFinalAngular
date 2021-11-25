import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { BodyComponent } from './body/body.component';
>>>>>>> a6ab48a203cc79d2949910c807a61393b25eea64

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
<<<<<<< HEAD
    FooterComponent
=======
    BodyComponent
>>>>>>> a6ab48a203cc79d2949910c807a61393b25eea64
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
