import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoModule } from './cursos/curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursoModule
  ],
  // providers: [CursosService], // Garante uma instancia unica para todas as classes que a injetem... Singleton - Comentado para isolar nos modulos de funcionalidade
  bootstrap: [AppComponent],
  providers: [LogService]
})
export class AppModule { }
