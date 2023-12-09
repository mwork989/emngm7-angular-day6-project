import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;
  

  constructor(public elementRef:ElementRef) { 
    this.highlightColor = ''
  }

 //event listening of elements for event based changes
  @HostListener('mouseover') onMethod1(){
    this.changeColor('black',this.highlightColor || 'green')
  }

  @HostListener('mouseleave') onMethod2(){
    this.changeColor('black','white')

  }

  public changeColor(color:string,bgColor:string):void{
     this.elementRef.nativeElement.style.color = color;
     this.elementRef.nativeElement.style.backgroundColor = bgColor;
   
  }


 

}
