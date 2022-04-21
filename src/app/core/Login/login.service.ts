import { IAuthModel } from './../../models/authModel';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient,
    private roter:Router
  ) { }

 
  onLogin(login:ILogin){
    return this.http.post(environment.BASE_URL+"Auth/Login",login)

  }

  isLogged(){
    return localStorage.getItem("loggedIn");
  }

  loggout(){ 
    localStorage.setItem("loggedIn","");
    this.roter.navigate(['/login']);
  }
}
