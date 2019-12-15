import { Component, 
          OnInit, 
          Input, 
          ViewEncapsulation, 
          OnChanges, 
          SimpleChanges, 
          DoCheck, 
          AfterContentInit, 
          AfterContentChecked, 
          AfterViewInit, 
          AfterViewChecked, 
          ViewChild, 
          ElementRef,
          ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  

})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
   @Input('serverElement') element: {type: string, name: string, content: string};
   @Input() name:string;
   @ViewChild('heading',{static:true}) header: ElementRef;
   @ContentChild('paragraph',{static:true}) paragraph:ElementRef;
  constructor() {
    console.log("ServerElement----Constructor");
   }

  //  ngOnInit gets called when Angular finishes the basic initialization of 
  //  the component, this doesn't mean the component is in the HTML yet, but the object was created
  //  ngOnInit will run after the constructor
   
  ngOnInit() {
    console.log("ServerElement----ngOInit");
    console.log("Content Child Of Paragraph---->",this.paragraph.nativeElement.textContent);
  }
  
  // ngOnChanges is called right at the start when the component is created, 
  // and whenever one of our bound input properties (@input) changes
  // * `ngOnChanges(changes: SimpleChanges) {`, ngOnChanges requires this argument
  
  ngOnChanges(changes: SimpleChanges){
    console.log("ng On Changes ServerElement");
    console.log(changes);
  }

//  * ngDoCheck runs whenever change detection runs. Change detection is when Angular sees that something needs to be changed 
//   in the HTML template
// * Even if nothing changes in the HTML, if you fire an event or something that could cause a change, ngDoCheck will run
// * ngDoCheck has a lot of different triggers, events, data changes etc

  ngDoCheck(){
    console.log("server Element: ng Do Check Called");
  }

// *ngAfterContentInit is called after the content that is projected via ng-content has been initialized
// * Not the view of the component itself, but the view of the parent component and specifically the part inside the <selectors>
  ngAfterContentInit(){
    console.log("Server Element: ng after content Init called");
  }

  // * ngAfterContentChecked will be called whenever the ng-content is checked
  ngAfterContentChecked(){
    console.log("Server Element: ng after content Checked called");

  }

  // ngAfterViewInit will be initialized once the view of the component has been rendered
  // AfterViewInit gives you access to the template elements, before this hook has been reached you can't do that

  ngAfterViewInit(){
    console.log("Server Element: ng after view init called");
    console.log("This is the header------>",this.header.nativeElement.textContent);
    console.log("Content Child Of Paragraph---->",this.paragraph.nativeElement.textContent);
  }

  // ngAfterViewChecked will be called every time the view have been checked
  ngAfterViewChecked(){
    console.log("Server Element: ng after view checked called");
  }


  // ngOnDestroy is called when a component is about to be destroyed, 
  // right before it good to use for some clean up work
  ngOnDestroy(){
    console.log("Server Element: ng On Destroy Called");
  }
}
