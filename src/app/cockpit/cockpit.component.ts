import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated=new EventEmitter<{bluePrintName:string, bluePrintContent:string}>();
  // use static = true if you wanna use it in ngOnInit
  @ViewChild('serverContentInput',{static:false}) serverContent:ElementRef;
  // newServerName:string="";
  newServerContent:string="";
  constructor() {}

  ngOnInit() {
  }
  onAddServer(serverNameInp:HTMLInputElement) {
    this.serverCreated.emit({
          serverName:serverNameInp.value,
          serverContent:this.serverContent.nativeElement.value
        });
  }

  onAddBlueprint(serverNameInp:HTMLInputElement) {
    this.blueprintCreated.emit({
      bluePrintName:serverNameInp.value,
      bluePrintContent:this.serverContent.nativeElement.value
    });
  }
}
