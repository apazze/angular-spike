import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
  styleUrls: ['./campo-control-erro.component.css']
})
export class CampoControlErroComponent implements OnInit{ // componente substituido por error-msg.component que encapsula mais coisas, evitando repetição de codigo e padronização de msgs de erro

  @Input() msgErro!: string;
  @Input() mostrarErro!: boolean | undefined;

  constructor() {}

  ngOnInit(): void {}
}
