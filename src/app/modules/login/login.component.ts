import { IAuthModel } from './../../models/authModel';
import { Router } from '@angular/router';
import { LoginService } from './../../core/Login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  massage:string='';
   auth:any;


  constructor(
    private fb:FormBuilder,
    private service:LoginService,
    private router:Router
  ) { }
  LoginForm=this.fb.group({
    Email:['',Validators.required],
    password:['',Validators.required]
  });

  


  get Email(){
    return  this.LoginForm.get('Email');
    }
    get password(){
      return  this.LoginForm.get('password');
  
    }

    onLogin(){

      
      this.service.onLogin(this.LoginForm.value).subscribe(
        logged=>{
         this.auth=logged;
          console.log(logged);
          console.log(this.auth.Roles);
          if(logged){
            localStorage.setItem("loggedIn",this.auth.token);
            this.router.navigate(['/employee']);
            console.log("Done");
          }else{
            localStorage.setItem("loggedIn","");
            this.massage=`userName / password is invalid`;

          }
        },
        error=>{
          console.log(error);
        }
      )
  
    }

  ngOnInit(): void {
    this.onLogin();
  }

}
