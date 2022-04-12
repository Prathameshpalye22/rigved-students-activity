import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  } 
  profile: FormGroup = this.builder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    address: this.builder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required]
    }),
  });

  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({});
  }
}
