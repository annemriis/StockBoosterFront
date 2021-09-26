import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
  host: {
    class: "container"
  }

})

export class AppLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
