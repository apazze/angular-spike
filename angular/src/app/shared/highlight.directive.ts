import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'white';
  @Input('highlight') highLightColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor; // senao ele inicia como branco na 1ª vez
  }

}
