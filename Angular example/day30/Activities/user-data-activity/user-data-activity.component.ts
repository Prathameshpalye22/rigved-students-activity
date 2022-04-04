import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data-activity',
  templateUrl: './user-data-activity.component.html',
  styleUrls: ['./user-data-activity.component.css']
})
export class UserDataActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {name:'Alex', gender:'Male', address:{state:'KA', city:'BLR'}},
    {name:'Jennifer', gender:'Female', address:{state:'MH', city:'MBI'}},
    {name:'Zaheer', gender:'Male', address:{state:'KA', city:'PUN'}}
  ]
}
