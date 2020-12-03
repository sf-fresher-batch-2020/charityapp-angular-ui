import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {

  constructor(private router:Router, private userService:UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  category: string;
  amount: string;
  

  addrequest(form:NgForm) {
    let formData = {category: this.category, amount: this.amount  };
    console.log(JSON.stringify(formData));
   this.userService.addedrequest(formData).subscribe(res => {
      console.log(res);
     this.toastr.success("Request added Successfully");
      form.reset();
     
    },err=>{
      console.error(err);
      this.toastr.error("Request adding failed");
    });
  }


}

