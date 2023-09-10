import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";

const alunosRoutes = [
    { path: 'alunos', component: AlunosComponent },
    { path: 'alunos/novo', component: AlunoFormComponent }, //rotas HARDCODED (sem parametros -> :id), declara primeiro!
    { path: 'alunos/:id', component: AlunoDetalheComponent },
    { path: 'alunos/:id/editar', component: AlunoFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}