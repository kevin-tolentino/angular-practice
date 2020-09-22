import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-servers', // select by html element
  //selector: '[app-servers]', // used to select by html attribute
 // selector: '.app-servers', // used to select by CSS class
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `, //you can change "templateURL" to "template" to put an inline html
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
