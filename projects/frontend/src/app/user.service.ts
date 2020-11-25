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
}
