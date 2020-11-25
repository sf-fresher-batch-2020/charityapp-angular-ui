import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string;
  email:string;
  password:string;
  
  users;
  
  constructor(private router:Router, private toastr:ToastrService, private userService:UserService) { }

  ngOnInit(): void {

  }
  register(form: NgForm){
    

    let users=  {Username: this.name , email: this.email , password: this.password, 
        role:'USER'};
    console.log(users);

    this.userService.register(users).subscribe(res => {
      console.log(res);

      if (res["errorMessage"]) {
        this.toastr.error(res["errorMessage"]);
      }
      else {
        //alert("Successfully Registered");     
        this.toastr.success("Successfully Registered");

        form.reset();
       // this.router.navigate(['login']);
      }

    }, err => {
      console.error(err);
      this.toastr.error("Failed To Register");

    });
    
 
   }
 
 
 }
