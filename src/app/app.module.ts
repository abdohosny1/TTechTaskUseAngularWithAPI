import { LoginModule } from './modules/login/login.module';
import { AddEditEmployeeComponent } from './components/employees/add-edit-employee/add-edit-employee.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailsComponent } from './components/employees/details/details.component';
import { DeleteComponent } from './components/employees/delete/delete.component';
import { UpdateComponent } from './components/employees/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEditEmployeeComponent,
    PageNotFoundComponent,
    DetailsComponent,
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    ReactiveFormsModule,
    LoginModule,
    

   ModalModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
