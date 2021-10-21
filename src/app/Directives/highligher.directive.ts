import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighligher]'
})
export class HighligherDirective implements OnChanges, OnInit {
  // @Input() highlightColor: string="black";
  @Input('appHighligher') highlightColor: string="";
  @Input() defaultColor:string="";
  // Sometimes we want the public name of an input/output property
    // to be different from the internal name. 
    // This is frequently the case with attribute directives. 
    // Directive consumers expect to bind to the name of the directive.
  // @Input('appHighligher') highlightColor: string="";
  
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border="3px gray solid";
    //this.elemRef.nativeElement.style.borderColor=this.defaultColor;
    
    console.log("[In constructor] default color:" + this.defaultColor);
    console.log("[In constructor] Highlight color:" + this.highlightColor);
   }


  ngOnChanges(changes: SimpleChanges): void {
    this.elemRef.nativeElement.style.borderColor=this.defaultColor;

    console.log("[In ngOnChanges] default color:" + this.defaultColor);
    console.log("[In ngOnChanges] Highlight color:" + this.highlightColor);
  }

  ngOnInit(): void {
    
  }

   @HostListener('mouseenter') onMouseOver(){
   //this.elemRef.nativeElement.style.border="5px yellow dotted";
   this.elemRef.nativeElement.style.borderColor=this.highlightColor;
   
   console.log("[In event] default color:" + this.defaultColor);
   console.log(" [In event] Highlight color:" + this.highlightColor);
   }

   @HostListener('mouseleave') onMouseout(){
    this.elemRef.nativeElement.style.border="3px gray solid";
    this.elemRef.nativeElement.style.borderColor=this.defaultColor;
   }
}
// More details:
// https://www.agiliq.com/blog/2020/05/custom-attribute-directives-in-angular/
// https://angular.io/guide/attribute-directives
// https://angular.io/guide/structural-directives
// https://www.c-sharpcorner.com/article/angular-6-custom-attribute-directive-in-depth-part-one/