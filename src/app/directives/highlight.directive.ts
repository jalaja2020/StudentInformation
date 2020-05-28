import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() styleObj: any;
  @Input() defultStyleObj: any;
  constructor(private element: ElementRef) {

    this.highlight(this.defultStyleObj);
  }

  @HostListener('mouseenter') mouseenter() {
    this.highlight(this.styleObj);
  }
  @HostListener('mouseleave') mouseleave() {
    this.highlight(this.defultStyleObj);
  }
  highlight = (style: any) => {
    
    this.element.nativeElement.style.backgroundColor = style?.backgroundColor;
    this.element.nativeElement.style.color = style?.color;
  }
}
