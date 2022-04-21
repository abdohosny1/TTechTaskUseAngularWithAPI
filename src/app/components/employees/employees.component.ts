import { LoginService } from './../../core/Login/login.service';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  getAll:any;
  errorMassage: any;
  bsModelresf? :BsModalRef;
  chackLogin:boolean=false;


  constructor(
    private service:EmployeeService,
    private modalService: NgbModal,
    private bsmodalService: BsModalService,
    private router:Router,
    private serviceLogin:LoginService
    ) { }

  ngOnInit(): void {
   this.getALLEmployee();
  }

  getALLEmployee(){
    this.service.returnAllEmployee().subscribe(
      (data) => {
        this.getAll = data;
        console.log(this.getAll);
      },
      (error) => {
        this.errorMassage = error;
      }
    );
  }

  addEmployee(){
    this.bsModelresf=this.bsmodalService.show(AddEditEmployeeComponent);
    this.bsModelresf.content.onClose=(add:any)=>{
      if(add){
        this.getALLEmployee();
      }
    }
  }


  
  onDetails(details:any){
    this.router.navigate(["/Datails",details.id]);

  }
  onDelete(deleteEmp:number){
    this.router.navigate(["/delete",deleteEmp]);

  }

  onUpdate(updateEmp:number){
    this.router.navigate(["/update",updateEmp]);

  }
  onLogin(){
    this.router.navigate(["/login"]);

  }
  onLogOut(){
    this.serviceLogin.loggout();
  }


  onEditEmployee(employee:any)
  {
    
    this.bsModelresf=this.bsmodalService.show(AddEditEmployeeComponent,{initialState:{employee}});
    this.bsModelresf.content.onClose=(update:any)=>{
      if(update){
        this.getALLEmployee();
      }
    }
  }

  onDeleteEmployee(id:number){

     let confirmDelete=confirm("Are you sure  Delete?")
     if(confirmDelete){
       this.service.delateEmployee(id).subscribe(
         done=>{
          // this.getALLEmployee();
           console.log("done");
        //   this.router.navigate(["/employee"]);
 
         },
         error=>{console.log(error);}
       )
 
    }else{
       
     }
  
   }

}
