import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guard/auth.guard";

const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule), canActivate: [AuthGuard]}, // // Guarda de Rotas, da acesso aos componentes somente se tiver autenticado (canActivate)
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule), canActivate: [AuthGuard]},
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent}, //quando o link faz parte do root a barra "/" é opcional
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}