import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimary]'
})
export class PrimaryDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#4a148c';
  }

}
