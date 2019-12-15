import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type:"blueprint",name:"Name1", content:"Content1"}];
  //  serverElements1:number[]=[32,33,43];
  onServerAdded(serverDetails:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type: 'server',
      name: serverDetails.serverName,
      content: serverDetails.serverContent
    });
  }
 

  onBluePrintAdded(BluePrintDetails:{bluePrintName:string, bluePrintContent:string}){

    this.serverElements.push({
      type: 'blueprint',
      name: BluePrintDetails.bluePrintName,
      content: BluePrintDetails.bluePrintContent
    });
  }

  changeFirstElement(){
    this.serverElements[0].name="This got changed";
  }
  
  destroyFirstElement(){
    this.serverElements.splice(0,1);
  }
}
