﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTutorialApi.Models
{
    public class EmployeeMst
    {
        [Key]
        public int empId { get; set; }
        public string empName { get; set; }
        public string empEmail { get; set; }
        public string empPassword { get; set; }

    }
}
