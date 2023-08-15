import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';

@NgModule({
  declarations: [ // declarations, imports, providers, bootstrap são metadados
    AppComponent,
    MeuPrimeiroComponenteComponent //expor o componente para outras classes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
