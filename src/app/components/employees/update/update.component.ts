import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  Id: any=0;

  employee:any;
  errorMassage: any;
  constructor(private activeRout: ActivatedRoute, private router: Router,private item:EmployeeService) { }

  ngOnInit(): void {
    this.activeRout.paramMap.subscribe((params: ParamMap) => {
      this.Id = params.get('id');
    });

    this.item.getEmployeeByiD(this.Id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    ); 
  }

  onUpdateEmployee(id:number,emmployeee:any){

   
       this.item.updateEmployee(id,emmployeee).subscribe(
         done=>{
          // this.getALLEmployee();
           console.log("done");
           this.router.navigate(["/employee"]);
 
         },
         error=>{console.log(error);}
       )
 

  
   }
   BackToEmployee(){
    this.router.navigate(["/employee"]);

  }

}
