import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { MeuPrimeiroModuloModule } from './meu-primeiro-modulo/meu-primeiro-modulo.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';

@NgModule({ //Decorator ou anotação da classe que é um módulo e que agrupa e organiza componentes, services, etc... de uma determinado pacote ou feature
  declarations: [ // declarations, imports, providers, bootstrap são metadados
    AppComponent, // em declarations é declarado os componentes, diretivas e pipes do módulo
    MeuPrimeiroComponenteComponent, 
    DataBindingComponent, 
    InputPropertyComponent, OutputPropertyComponent, CicloComponent, DiretivaNgIfComponent, DiretivaNgswitchComponent, DiretivaNgforComponent //expor o componente para outras classes
  ],
  imports: [
    BrowserModule, // módulos externos que serão importados nos componentes ou neste módulo
    MeuPrimeiroModuloModule, 
    NgbModule,
    FormsModule
  ],
  providers: [], // serviços para o módulo. Neste caso, como se trata do AppModule ele serão globais, exemplo de uso: serviço de Autenticação ou guardas de rotad devem ser declarados aqui, ficará de escopo para toda a aplicação
  bootstrap: [AppComponent] //somente está disponivel neste módulo raíz, este AppComponent é o componente principal, onde ficará o menu, rotas, etc...
})
export class AppModule { }
