import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropDownService } from './services/drop-down.service';

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers: [
    DropDownService
  ]
})
export class SharedModule { }
