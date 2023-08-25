import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]' // Se passar o elemento na frente -> p[fundoAmarelo] vai se aplicar a somente paragrafos, Se button[fundoAmarelo] somente a botoes, etc... 
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
    // console.log(this.elementRef);
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow'; -> nao recomendado, possui fragilidade de Segurança
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow') // Mais seguro
   }

}
