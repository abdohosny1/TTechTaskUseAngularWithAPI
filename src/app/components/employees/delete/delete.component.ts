import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  Id: any=0;

  oneEmployee:any;
  errorMassage: any;
  constructor(private activeRout: ActivatedRoute, private router: Router,private item:EmployeeService) { }


  ngOnInit(): void {
    this.activeRout.paramMap.subscribe((params: ParamMap) => {
      this.Id = params.get('id');
    });

    this.item.getEmployeeByiD(this.Id).subscribe(
      (data) => {
        this.oneEmployee = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    ); 
  }

  onDeleteEmployee(id:number){

   // let confirmDelete=confirm("Are you sure  Delete?")
   // if(confirmDelete){
      this.item.delateEmployee(id).subscribe(
        done=>{
         // this.getALLEmployee();
          console.log("done");
          this.router.navigate(["/employee"]);

        },
        error=>{console.log(error);}
      )

  //  }else{
      
  //  }
 
  }

  BackToEmployee(){
    this.router.navigate(["/employee"]);

  }

}
