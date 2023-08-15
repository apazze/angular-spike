import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
