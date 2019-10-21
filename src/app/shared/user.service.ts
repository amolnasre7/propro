import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootUrl="";

  constructor(private http:HttpClient) { }
  registerUser(user:User){

    const body: User = {
      userName: user.userName,
      Password: user.Password,
      Email: user.Email,
      firstName: user.firstName,
      lastName: user.lastName
  }
 return this.http.post(this.rootUrl+'api/user/Register',body); 
}
}
