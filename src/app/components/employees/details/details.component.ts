import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  Id: any=0;

  oneEmployee:any;
  errorMassage: any;
  constructor(private activeRout: ActivatedRoute, private router: Router,private list:EmployeeService) { }

  ngOnInit(): void {
    this.activeRout.paramMap.subscribe((params: ParamMap) => {
      this.Id = params.get('id');
    });

    this.list.getEmployeeByiD(this.Id).subscribe(
      (data) => {
        this.oneEmployee = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    ); 
  }

  BackToEmployee(){
    this.router.navigate(["/employee"]);

  }

  UpdateEmployee(updateEmp:number){
    this.router.navigate(["/update",updateEmp]);

  }
}
