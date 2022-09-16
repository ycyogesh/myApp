import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { 

  }
  title : any = "This is our First Angular Project"
  ngOnInit(): void {
  }

}
