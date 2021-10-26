import { Component, OnInit } from '@angular/core'
import { EmployeeMst } from './Employee.Model';
import { EmployeeService } from './Employee.service';

@Component({
    selector: 'CRUD-app',
    templateUrl: './Employee.component.html'
})
export class EmployeeComponent implements OnInit {
    title: string = 'Employee Component is Worked'
    empList: any // list of employee
    employeeId: number = 0; // id of single employee
    btnSave: string = 'Save';

    // create object of class
    employeeModel: EmployeeMst = new EmployeeMst();
    constructor(private employeeService: EmployeeService) {

    }
    ngOnInit(): void {
        this.getEmployeeData(); // show on browser
    }

    getEmployeeData() {
        this.employeeService.getAllEmployee().subscribe(data => {
            this.empList = data;
        });
    }
    EmployeeById(id: any) {
        // store response in any bydefault store in object
        this.employeeService.getEmployeeById(id).subscribe((data: any) => {
            this.employeeId = data.empId;// extract empID from response object
            console.log(this.employeeId);
            this.btnSave = "Update";
            this.employeeModel.EmployeeForm.patchValue(data); // compare with control and attach to form
            console.log('Fetch Employee id which selected from dataase table'
                + JSON.stringify(data));
        });

    }
    deleteById(id: number) {
        this.employeeService.deleteEmployee(id).subscribe(data => {
            this.getEmployeeData();
        });
    }
    SaveButton(data: any) {
        if (this.employeeId && this.employeeId > 0) {
            // CTO
            const empDataforUpdate = {
                // name exactly match to Model class of server or not pass
                empId: this.employeeId, // pass id
                empName: this.employeeModel.EmployeeForm.controls.empName.value,
                empEmail: this.employeeModel.EmployeeForm.controls.empEmail.value,
                password: this.employeeModel.EmployeeForm.controls.empPassword.value
            };
            this.employeeService.updateEmployee(empDataforUpdate).subscribe(data => {
                this.getEmployeeData();
                this.employeeModel.EmployeeForm.reset(); //after data pass clear screen
                this.btnSave = 'Save';
            });
        }
        else {
            console.log(data);
            var obervables = this.employeeService.saveEmployee
                (this.employeeModel.EmployeeForm.value);
            obervables.subscribe(data => {
                console.log('Save data' + JSON.stringify(data));
                this.getEmployeeData(); // show on table
                this.employeeModel.EmployeeForm.reset();
            });
        }
    }
}



