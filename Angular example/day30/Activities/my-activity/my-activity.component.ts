import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee = {id:100, name:'Ajay', salary:45200}

}
