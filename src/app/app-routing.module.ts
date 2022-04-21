import { AuthService } from './core/Auth/auth.service';
import { LoginComponent } from './modules/login/login.component';
import { UpdateComponent } from './components/employees/update/update.component';
import { DeleteComponent } from './components/employees/delete/delete.component';
import { DetailsComponent } from './components/employees/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {path:'',component:EmployeesComponent,canActivate:[AuthService]},
 // {path:"",redirectTo:"/employee",pathMatch:"full"},
  {path:"employee",component:EmployeesComponent},
  {path:"login",component:LoginComponent},
  {path:"Datails/:id",component:DetailsComponent},
  {path:"delete/:id",component:DeleteComponent},
  {path:"update/:id",component:UpdateComponent},

  {path:"**",component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
