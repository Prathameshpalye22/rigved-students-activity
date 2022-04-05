import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity31',
  templateUrl: './activity31.component.html',
  styleUrls: ['./activity31.component.css']
})
export class Activity31Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname : string | undefined = undefined;
  lastname : string | undefined = undefined;
  array:Array<{firstn: string, lastn: string}>=[]
  save(fn : string, ln : string): void {
    this.firstname= fn;
    this.lastname= ln;
     let object={firstn:this.firstname,lastn:this.lastname}
    this.array.push(object)
}
}