import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guard/auth.guard";
import { CursosGuard } from "./guard/cursos.guard";
// import { AlunosGuard } from "./guard/alunos.guard.";

const appRoutes: Routes = [
    {
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
        canActivate: [AuthGuard],  // Guarda de Rotas, da acesso aos componentes somente se tiver autenticado (canActivate)
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard] // canLoad outra proteção contra carregamento de um modulo onde o usuario posso nao ter permissao de acesso
    },
    {
        path: 'alunos',
        loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard],
        /* , canActivateChild: [AlunosGuard] O child pode-se aplicar por exemplo pra ver se o usuario tem acesso para editar. Movido para o escopo local de Alunos */
        canLoad: [AuthGuard]
    },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }, //quando o link faz parte do root a barra "/" é opcional
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}