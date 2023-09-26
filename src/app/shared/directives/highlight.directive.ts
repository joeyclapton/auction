import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highligh('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highligh('');
  }

  constructor(private element: ElementRef) { }

  private highligh(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
