import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string;
 

  constructor(private http : HttpClient) { 
    this.apiUrl= environment.API_URL;
  }
  getAllUsers(){
    let url= this.apiUrl +"/users";
    return this.http.get(url);
  }

  register(user){
    let url= this.apiUrl +"/users";
    return this.http.post(url,user);
  }
  addedrequest(request){
    let url= this.apiUrl +"/requests";
    return this.http.post(url,request);
  }
  getrequests(){
    let url= this.apiUrl +"/requests";
    return this.http.get(url);
  }
  deleterequest(id){
    let url = this.apiUrl + "/books/" + id ;
      return this.http.delete(url);
  }
}
