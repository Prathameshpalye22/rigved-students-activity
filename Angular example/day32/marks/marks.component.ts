import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students = [
    {rollNo:1, Name:'Ajay', marks: 40},
    {rollNo:2, Name:'Vijay', marks: 30},
    {rollNo:3, Name:'Manu', marks: 60},
    {rollNo:4, Name:'Amit', marks: 20},
    {rollNo:5, Name:'Amit', marks: 70},
    {rollNo:6, Name:'Zaheer', marks: 80}
  ]
}
