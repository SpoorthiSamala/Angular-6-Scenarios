import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {
  
  @Output() public childEvent=new EventEmitter();
  
  public name="";

  constructor() { }

  ngOnInit() {
  }
  
  fireEvent(){
    this.childEvent.emit(this.name);
  }
}
