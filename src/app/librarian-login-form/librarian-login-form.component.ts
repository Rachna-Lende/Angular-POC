import { Component, OnInit } from '@angular/core';
import {LIBRARIAN} from '../mock-librarian';
import {Librarian} from '../librarian';

import {Router} from '@angular/router';
@Component({
  selector: 'app-librarian-login-form',
  templateUrl: './librarian-login-form.component.html',
  styleUrls: ['./librarian-login-form.component.scss']
})
export class LibrarianLoginFormComponent implements OnInit {

  constructor(private router: Router) { }

user_name:string;
password:string;
incorectCredentials:boolean=false;
  ngOnInit() {
  }

  
  login(data) : void {
    if(data.user_name == 'anuradha' && data.password == 'anuradha'){
     // alert("valid user");
    localStorage.setItem('user_name',this.user_name);
    this.router.navigate(["librarian-home"]);
    
    }else {
      //alert("Invalid credentials");
      this.incorectCredentials=true;
    }
  }

}
