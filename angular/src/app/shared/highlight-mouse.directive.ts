import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') 
  onMouseOver() { // mouseenter é o nome do evento no DOM, onMouseOver é o meu metodo
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement, // ficou duplicado, por isso foi usado o HostBinding
    //   'background-color',
    //   'yellow'
    //   )

    this.backgroundColor = 'yellow';

  }

  @HostListener('mouseleave') 
  onMouseLeave() { // mouseenter é o nome do evento no DOM, onMouseOver é o meu metodo
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'white'
    //   )

    this.backgroundColor = 'white';

  }

  // @HostBinding('style.backgroundColor') backgroundColor!: string; // poderia ser assim, exemplo abaixo com getter e setter pra fazer alguma manupulação...

  @HostBinding('style.backgroundColor') get setColor() { // o get escuta p/ sempre que há modificação...
    //codigo extra

    return this.backgroundColor;
  }

  private backgroundColor!: string;

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
  ) { }

}
