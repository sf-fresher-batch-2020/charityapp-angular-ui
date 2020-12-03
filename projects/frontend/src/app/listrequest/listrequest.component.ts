import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listrequest',
  templateUrl: './listrequest.component.html',
  styleUrls: ['./listrequest.component.css']
})
export class ListrequestComponent implements OnInit {

  id:number;
  requests:any;

  constructor(private userService: UserService, private route: ActivatedRoute,private toastr:ToastrService) { 
   this.route.params.subscribe(params => {
     this.id = +params["id"];
    })
  }
  selectrequest;
  ngOnInit(): void {
    this.requestslist();
  }

  requestslist(){
    this.userService.getrequests().subscribe(res => {
      this.requests = res;
    })
  }

  deleteBook(i) {
    console.log("Deleting user :" + i);
    this.userService.deleterequest(i).subscribe(res => {
     window.location.reload();
     this.toastr.success('request deleted!');
     this.requestslist();
  
    })
  }
}
