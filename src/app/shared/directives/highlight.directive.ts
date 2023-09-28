import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highligh(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highligh('');
  }

  constructor(private element: ElementRef) { }

  private highligh(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
