import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationServide } from './authentication.service';

@Component({
  selector: 'fm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth: AuthenticationServide) { }

  ngOnInit(): void {
  }
  //this submits the whole form which allows us to call other methods like reset() on the form
  onSubmit(data:NgForm) {
    console.log("buttoned clicked")
    console.log(data.value)
  
    this.auth.signup(data.value.email,data. value.password).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )

      data.reset();
  }

}
