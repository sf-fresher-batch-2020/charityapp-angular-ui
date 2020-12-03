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

  constructor(private router:Router, private toastr:ToastrService, private userService:UserService) { }
  ngOnInit(): void {
 }

  name:string;
  email:string;
  password:string;
  number:string;
  age:string;

   register(form: NgForm){
   

    

    let users=  {name: this.name , email: this.email , password: this.password, number: this.number , age: this.age };
    console.log(JSON.stringify(users));

    

      this.userService.register(users).subscribe(res => {
        console.log(res);
       this.toastr.success("Successfully Registered");
        form.reset();
        this.router.navigate(['login']);
      },err=>{
        console.error(err);
        this.toastr.error("Registration failed");
      });
    }
  }
  