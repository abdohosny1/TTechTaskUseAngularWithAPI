import { LoginService } from './../Login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate{

  constructor(private authService:LoginService,private router:Router) { }

  canActivate
  () {

    if(this.authService.isLogged()==''){
      this.router.navigate(['/login']);
      return false;
    }else{
      return true;
    } 
   
   }
}
