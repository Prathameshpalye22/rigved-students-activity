
import { Component, Input, OnInit,EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  name: string | undefined=undefined;

  @Output()
  data: EventEmitter<number> = new EventEmitter<number>();
  counter = 0;
  send() : void{
    this.counter =this.counter +1;
    this.data.emit(this.counter);
  }
}
