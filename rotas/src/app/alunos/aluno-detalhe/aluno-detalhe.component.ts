import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];
    //     this.aluno = this.alunosService.getAluno(id);
    //   }); trocado pelo resolver para carregar os dados antes do componente inicializar

    console.log('ngOnInit: AlunoDetalheComponent')

    this.inscricao = this.route.data.subscribe(
      (info: any) => {
        console.log('Recebendo o obj Aluno do resolver');
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
