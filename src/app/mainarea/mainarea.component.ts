import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.scss']
})
export class MainareaComponent implements OnInit {

  constructor() { }
  userInput : any;
  ngOnInit(): void {
  }
  clickBtn(event : any){
    console.log("Clicked",event.target.value);
  }
  clickInput(event : any){
    console.log("Entered",event.target.value);
    this.userInput = event.target.value
  }
}
