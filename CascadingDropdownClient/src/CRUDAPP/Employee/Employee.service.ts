import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Injectable()

export class EmployeeService{
    constructor( private httpClient:HttpClient ){

    }
    getAllEmployee()
    {
        return this.httpClient.get('https://localhost:44349/api/EmployeeMst');
    }
    getEmployeeById(id:any){
        return this.httpClient.get('https://localhost:44349/api/EmployeeMst/'+id);
    }
    saveEmployee(empdata:any)
    {
        return this.httpClient.post('https://localhost:44349/api/EmployeeMst',empdata);
    }
    updateEmployee(empData:any)
    {
        return this.httpClient.put('https://localhost:44349/api/EmployeeMst',empData);
    }
    deleteEmployee(empId:number)
    {
        return this.httpClient.delete('https://localhost:44349/api/EmployeeMst/'+empId);
    }
    
}







