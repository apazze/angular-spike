import { Injectable } from "@angular/core";
import { Aluno } from "../aluno";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { AlunosService } from "../alunos.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): any | Observable<any> | Promise<any> {

        console.log('AlunoDetalheResolver')

        let id = route.params['id'];

        return this.alunosService.getAluno(id);
    }

}