import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  userInput : any;
  ngOnInit(): void {
  }
  clickBtn(event : any){
    console.log("Clicked",event.target.value);
  }
  clickInput(event : any){
    // console.log("Entered",event.target.value);
    this.userInput = event.target.value
  }
}
