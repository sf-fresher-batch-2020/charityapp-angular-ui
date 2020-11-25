import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string;
  constructor(private http:HttpClient) {
    this.apiUrl= environment .API_URL;
   }

   getLoggedInUser(){
    let user  = localStorage.getItem("LOGGED_IN_USER");
    let loggedInUser = user ? JSON.parse(user) : null;
    return loggedInUser;
  }

  
 /* getLoggedInUserId(){
    let loggedInUser = this.getLoggedInUser();
    return loggedInUser ? loggedInUser.id : null;
  }*/

  logout(){
    localStorage.removeItem("LOGGED_IN_USER");
  }

  storeLoginDetails(user){
    localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
  }
}
