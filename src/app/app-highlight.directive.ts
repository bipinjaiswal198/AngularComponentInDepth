import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  @Input() color="yellow";

  constructor(private elementref:ElementRef) {
    
   }

   @HostListener("mouseenter")
   appHighLight(){
    this.elementref.nativeElement.style.background=this.color;
   }

   @HostListener("mouseleave")
   appdisHighLight(){
    this.elementref.nativeElement.style.background=null;
   }

}
