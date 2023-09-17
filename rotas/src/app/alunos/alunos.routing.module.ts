import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosGuard } from "../guard/alunos.guard.";
import { AlunosDeactivateGuard } from "../guard/alunos-deactivate.guard";
import { AlunoDetalheResolver } from "./guard/aluno-detalhe.resolver";

const alunosRoutes = [
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunoFormComponent }, //rotas HARDCODED (sem parametros -> :id), declara primeiro!
            { path: ':id', component: AlunoDetalheComponent, resolve: {aluno: AlunoDetalheResolver}},
            { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard]} // guardiao para perguntar se deseja sair do form com dados preenchidos ou no caso de erro no backend
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}