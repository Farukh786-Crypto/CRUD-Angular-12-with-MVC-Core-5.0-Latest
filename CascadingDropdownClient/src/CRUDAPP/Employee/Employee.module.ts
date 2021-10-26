import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './Employee.component';
import { EmployeeService } from './Employee.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
    declarations:[EmployeeComponent],
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,
        HttpClientModule
    ],
    providers:[EmployeeService],
    bootstrap:[EmployeeComponent]

})

export class CRUDModule{

}
















