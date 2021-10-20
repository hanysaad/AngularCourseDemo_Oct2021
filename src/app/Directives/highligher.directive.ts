import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligher]'
})
export class HighligherDirective {
  
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border="3px gray solid";
    //console.log("test" + this.appHighligher);
   }

   @HostListener('mouseenter') onMouseOver(){
   this.elemRef.nativeElement.style.border="5px yellow dotted";
   }

   @HostListener('mouseleave') onMouseout(){
    this.elemRef.nativeElement.style.border="3px gray solid";
   }
}
