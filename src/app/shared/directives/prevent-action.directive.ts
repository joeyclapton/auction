import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPreventAction]'
})
export class PreventActionDirective {
  @Input() status = '';

  @HostListener('click') onClick() {
    this.onUnsave();
  }

  constructor(private element: ElementRef) { }

  onUnsave() {
    if (this.status === 'UNSAVE') {
      this.onCheckUnsave()
    }
  }

  onCheckUnsave() {
    if (confirm('🚨 Deseja realmente sair sem salvar?')) {
      console.log('Saiu sem salvar os dados')
    } else {
      console.log('Continuou na página')
    }
  }
}
