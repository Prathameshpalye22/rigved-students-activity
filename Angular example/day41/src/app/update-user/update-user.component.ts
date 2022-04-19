import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  data:any|undefined=undefined
  out:any | undefined=undefined
  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }
  
  id=new FormControl('');
  age=new FormControl('');

  handleUpdate(){
    let id=this.id.value;
    let age=this.age.value;
    this._service.updateUser(id,age,this.data).subscribe((data)=>{
      this.out=data
    })
  }


}