import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id!: string;

  inscricao!: Subscription;

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id']; // para pegar a chave id do params que é um Object dinamico
    // console.log(this.route);
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(parametro => this.id = parametro['id']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe(); //boa pratica, se desinscrever
  }

}
