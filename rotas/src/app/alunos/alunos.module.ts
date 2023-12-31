import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from '../guard/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guard/aluno-detalhe.resolver';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [
        AlunosService, // Só os componentes internos tem acesso
        AlunosDeactivateGuard, // Guardiao para nao sair do formulario com dados preenchidos sem querer
        AlunoDetalheResolver // Resolver serve para carregar os dados antes da rota ser ativada (componente renderizado ou inicializado)
    ],
})
export class AlunosModule { }
