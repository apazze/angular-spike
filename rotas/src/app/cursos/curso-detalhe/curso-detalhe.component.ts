import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id!: number;
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
    ) {
    // this.id = this.route.snapshot.params['id']; // para pegar a chave id do params que é um Object dinamico
    // console.log(this.route);
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((parametro: any) => {
      this.id = parametro['id'];
      this.curso = this.cursosService.getCurso(this.id);
      if(this.curso == null) {
        this.router.navigate(['cursos/naoEncontrado']);
      }
    });

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe(); //boa pratica, se desinscrever
  }

}
