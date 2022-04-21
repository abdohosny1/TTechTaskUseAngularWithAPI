import { IEmployee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {

  employee:IEmployee={
    Id:0,
    Name:"",
    Age:0,
    City:""
  };

  onClose:any;

  constructor(
    public  bsModel: BsModalRef,
    private service:EmployeeService,
  ) { }

  ngOnInit(): void {
  }

  onAddEmployee(){

    let confirmAdd=confirm("Add Employee?");
    if(confirmAdd){
      this.service.addEmployee(this.employee).subscribe(
        taskAdd=>{
          this.onClose(taskAdd);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
    }

  }
  onEditEmployee(){

    let confirmAdd=confirm("Edit Employee?");
    if(confirmAdd){
      this.service.updateEmployee(this.employee.Id,this.employee).subscribe(
        taskupdare=>{
          console.log(taskupdare);
          this.onClose(taskupdare);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
    }
  }
}
