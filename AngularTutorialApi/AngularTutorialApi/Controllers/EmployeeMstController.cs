using AngularTutorialApi.DAL;
using AngularTutorialApi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTutorialApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCorsPolicy")]
    public class EmployeeMstController : ControllerBase
    {
        private readonly DatabaseContext databaseContext;

        public EmployeeMstController(DatabaseContext _databaseContext)
        {
            databaseContext = _databaseContext;
        }
        [HttpGet]
        public IActionResult GetEmployeeList()
        {
            var listEmp = databaseContext.employees.ToList();
            return Ok(listEmp);
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployeeId(int id)
        {
            var EmpIdData = databaseContext.employees.Find(id);
            return Ok(EmpIdData);
        }

        [HttpPost]
        public IActionResult PostEmployee(EmployeeMst employeeMst)
        {
            databaseContext.employees.Add(employeeMst);
            databaseContext.SaveChanges();
            return Ok(employeeMst);
        }

        [HttpPut]
        public IActionResult PutEmployee(EmployeeMst employeeMst)
        {
            var empData = databaseContext.employees.FirstOrDefault<EmployeeMst>(a => a.empId == employeeMst.empId);
            empData.empName = employeeMst.empName;
            empData.empEmail = employeeMst.empEmail;
            empData.empPassword = employeeMst.empPassword;
            databaseContext.SaveChanges();
            return Ok(employeeMst);
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteEmployee(int id)
        {
            var empData = databaseContext.employees.FirstOrDefault<EmployeeMst>(a=>a.empId==id);
            databaseContext.employees.Remove(empData);
            databaseContext.SaveChanges();
            return Ok(empData);
        }
    }
}
