import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';

@NgModule({ //Decorator ou anotação da classe que é um módulo e que agrupa e organiza componentes, services, etc... de uma determinado pacote ou feature
  declarations: [ // declarations, imports, providers, bootstrap são metadados
    AppComponent, // em declarations é declarado os componentes, diretivas e pipes do módulo
    MeuPrimeiroComponenteComponent //expor o componente para outras classes
  ],
  imports: [
    BrowserModule // módulos externos que serão importados nos componentes ou neste módulo
  ],
  providers: [], // serviços para o módulo. Neste caso, como se trata do AppModule ele serão globais, exemplo de uso: serviço de Autenticação ou guardas de rotad devem ser declarados aqui, ficará de escopo para toda a aplicação
  bootstrap: [AppComponent] //somente está disponivel neste módulo raíz, este AppComponent é o componente principal, onde ficará o menu, rotas, etc...
})
export class AppModule { }
