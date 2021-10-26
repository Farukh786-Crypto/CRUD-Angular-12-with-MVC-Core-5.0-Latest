import {FormGroup,FormControl,Validators} from '@angular/forms'
export class EmployeeMst
{
    empId:number=0;
    empName:string="";
    empEmail:string="";
    empPassword:string="";

    EmployeeForm:FormGroup;
    constructor(){
        this.EmployeeForm=new FormGroup({
            empName:new FormControl('',[Validators.required]),
            empEmail:new FormControl('',[Validators.required]),
            empPassword:new FormControl('',[Validators.required])
        })
    }
}






