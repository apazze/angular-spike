import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoModule } from './cursos/curso.module';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
